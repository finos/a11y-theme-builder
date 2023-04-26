/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import express, { Request, Response, NextFunction } from "express";
const fs = require("fs");
import { cwd } from "process";

export class DocError extends Error {
    public readonly scode: number;
    constructor(scode: number, msg: string) {
        super(msg);
        this.scode = scode;
    }
}

const DB_NAME = "themes";
var Engine = require('tingodb')();
// var db = new Engine.Db(cwd() + '/src/data', {});
var db = new Engine.Db(__dirname + '/../src/data', {});
var collection = db.collection(DB_NAME);
collection.compactCollection(function(a:any, b:any) {
    console.log(`compactCollection a=${a} b=${b}`);
});

// Delete database
async function deleteDocs(): Promise<any> {
    console.log(`deleteDocs()`);
    return new Promise((success:any, fail:any) => {
        collection.drop(function() {
            console.log("  database dropped");
            collection = db.collection(DB_NAME);
            success(true);
        })
    })
}

// Get all theme objects
async function getDocs(match?: any): Promise<any[]> {
    console.log(`getDocs()`);
    return new Promise((success:any, fail:any) => {
        collection.find(match).toArray(function(err:any, items:any) {
            if (items) {
                //console.log("  items=",items);
                const rtn: any = [];
                for (let doc of items) {
                    delete doc["_id"];
                    rtn.push(doc);
                }
                return success(rtn);
            }
            if (err) {
                return fail(new DocError(500, err.message));
            }
            return fail(new DocError(404, `no documents were found`));
        })
    });
}

// Get metadata for all theme objects
async function getMetadata(match?: any): Promise<any[]> {
    console.log(`getMetadata()`);
    const fields = { id:1, metadata:1};
    return new Promise((success:any, fail:any) => {
        collection.find(match, fields).toArray(function(err:any, items:any) {
            if (items) {
                const rtn: any = [];
                for (let doc of items) {
                    delete doc["_id"];
                    rtn.push(doc);
                }
                return success(rtn);
            }
            if (err) {
                return fail(new DocError(500, err.message));
            }
            return fail(new DocError(404, `no documents were found`));
        })
    });
}

// Get all theme names
async function getDocNames(match?: any): Promise<any[]> {
    console.log(`getDocNames()`);
    return new Promise((success:any, fail:any) => {
        collection.find(match, { id: 1 }).toArray(function(err:any, items:any) {
            if (items) {
                console.log("  items=",items);
                const rtn: any = [];
                for (let doc of items) {
                    rtn.push(doc.id);
                }
                return success(rtn);
            }
            if (err) {
                return fail(new DocError(500, err.message));
            }
            return fail(new DocError(404, `no documents were found`));
        })
    });
}

// Get theme for id
async function getDoc(id: string, fields?: string[]): Promise<any> {
    console.log(`getDoc(${id}, ${JSON.stringify(fields)})`);
    const match = {id: id}
    let _fields:any = null;
    if (fields) {
        _fields = {};
        for (var _field of fields) {
            _fields[_field] = true;
        }
    }
    return new Promise((success:any, fail:any) => {
        collection.findOne(match, _fields, function(err:any, item:any) {
            if (item) {
                delete item["_id"];
                return success(item);
            }
            if (err) {
                return fail(new DocError(500, err));
            }
            return fail(new DocError(404, `document '${JSON.stringify(id)}' was not found`));
        })
    });
}

// Update theme
async function updateDoc(id: string, doc: any, returnDoc?: boolean): Promise<any> {
    console.log(`updateDoc(${id}, ${JSON.stringify(doc)}, ${returnDoc})`);
    return new Promise((success:any, fail:any) => {
        if (doc.id) {
            if (doc.id != id) {
                return fail(new DocError(501, `invalid document`));
            }
        }
        else {
            let found = false;
            for (var key of Object.keys(doc)) {
                if (key.startsWith("$")) {
                    found = true;
                    break;
                }
            }
            // Only add id if no update operator (Note: Still seems to work correctly even if $set)
            if (!found) {
                doc.id = id; 
            }
        }
        collection.update({id: id}, doc, function(err:any, item:any) {
            if (item) {
                console.log("  update doc=",item);
                if (returnDoc) {
                    const r = getDoc(id);
                    return success(r);
                }
                return success(true);
            }
            if (err) {
                return fail(new DocError(500, err.message));
            }
            return fail(new DocError(404, `document '${JSON.stringify(id)}' was not found`));

        })
    });
}

// Create theme
async function createDoc(doc: any): Promise<any> {
    console.log(`createDoc(${doc.id})`);
    if (!doc || !doc.id) {
        throw new DocError(501, `invalid document`);
    }
    return new Promise(async (success:any, fail:any) => {
            try {
                const exists = await getDoc(doc.id);
                console.log(" exists=",exists);
                return fail(new DocError(502, `document already exists`));
            }
            catch (e) {
            }
            collection.insert(doc, function(err:any, item:any) {
            if (item) {
                console.log("  create doc=",item);
                if (item.length > 0) {
                    delete item[0]["_id"];
                    return success(item[0]);
                }
            }
            if (err) {
                return fail(new DocError(500, err.message));
            }
            return fail(new DocError(404, `document '${JSON.stringify(doc.id)}' was not found`));
        })
    })
}

// Delete theme
async function deleteDoc(id:string): Promise<any> {
    console.log(`deleteDoc(${id})`);
    return new Promise(async (success:any, fail:any) => {
        let doc:any;
        try {
            doc = await getDoc(id);
        } catch (e) {
            fail(e);
        }
        collection.remove({id: id}, function(err:any, item:any) {
            if (item) {
                console.log("  delete doc=", item);
                return success(doc);
            }
            if (err) {
                return fail(new DocError(500, err));
            }
            return fail(new DocError(404, `document '${JSON.stringify(doc.id)}' was not found`));
        })
    })
}

// Register endpoints
export function registerThemesEndpoint(app: express.Application) {

    app.all("/api/themes", themesEndpoint);
    app.all("/api/themes/:id", themesEndpointWithId);
    app.all("/api/locale", localeEndpoint);

    // Endpoint /api/themes
    async function themesEndpoint(req: Request, res: Response, next: NextFunction) {
        const method = req.method;
        console.info(`themes endpoint ${method}`);
        try {

            // Get list of themes
            if (method == "GET") {
                const metadata = req.query.metadata;
                if (metadata === undefined) {
                    const r = await getDocNames();
                    return res.send(r);
                }
                else {
                    const r = await getMetadata();
                    return res.send(r);
                }
            }

            // Create new theme
            else if (method == "POST") {
                const data = req.body;
                const r = await createDoc(data);
                return res.send(r);
            }

            // Delete all themes
            else if (method == "DELETE") {
                const r = await deleteDocs();
                return res.send(r);
            }
    
            else {
                throw new DocError(500, `Invalid operation ${method}`);
            }
        } catch (e:any) {
            console.log("Error:", e.message);
            next(e);
        }
    }

    // Endpoint /api/themes/:id
    async function themesEndpointWithId(req: Request, res: Response, next: NextFunction) {
        const method = req.method;
        const id = req.params.id;
        console.info(`theme endpoint ${method} with id=${id}`);
        try {

            // Get theme
            if (method == "GET") {
                const fields = req.query.fields ? (""+req.query.fields).split(",") : undefined;
                const r = await getDoc(id, fields);
                return res.send(r);
            }

            // Update theme
            else if (method == "PUT" || method == "PATCH") {
                const data = req.body;
                const returnDoc = (req.query.returnDoc == "true") ? true : false;
                const r = await updateDoc(id, data, returnDoc);
                return res.send(r);
            }

            // Delete theme
            else if (method == "DELETE") {
                const r = await deleteDoc(id);
                return res.send(r);
            }

            else {
                throw new DocError(500, `Invalid operation ${method}`);
            }
        } catch (e: any) {
            console.log("Error:", e.message);
            next(e);
        }
    }

    // Endpoint /api/locale
    async function localeEndpoint(req: Request, res: Response, next: NextFunction) {
        const method = req.method;
        console.info(`locale endpoint ${method}`);
        console.log("pwd=",process.cwd())
        try {

            // Get locale
            if (method == "GET") {
                const r = fs.readFileSync("./src/ui/src/locales/data.json", "utf8");
                console.log("r=",JSON.stringify(JSON.parse(r),null,4));
                return res.send(r);
            }

            // Create new theme
            else if (method == "POST") {
                const data = req.body;
                console.log("data=",typeof data);
                const r = fs.readFileSync("./src/ui/src/locales/data.json", "utf8");
                const json = JSON.parse(r);
                for (var key in data) {
                    json[key] = data[key];
                }
                console.log("json=",JSON.stringify(json,null,4));
                fs.writeFileSync("./src/ui/src/locales/data.json", JSON.stringify(json,null,4), "utf8");
                return res.send(json);
            }

            // Delete all themes
            else if (method == "DELETE") {
                // const r = await deleteDocs();
                // return res.send(r);
            }
    
            else {
                throw new DocError(500, `Invalid operation ${method}`);
            }
        } catch (e:any) {
            console.log("Error:", e.message);
            next(e);
        }
    }

    // endpoint /api/db/compact

}