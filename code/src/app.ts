/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as path from "path";
import { Config } from "./config";
import { addAuthMiddleware } from "./auth";
import { registerThemesEndpoint } from "./themesEndpoint";
import { cwd } from "process";

const cfg = new Config();

// Cross-domain middleware
function allowCrossDomain(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', cfg.corsOrigin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method == 'OPTIONS') {
        //console.log("OPTIONS headers=",req.headers)
        res.header('Access-Control-Max-Age', ""+60 * 60 * 24 * 365);
        return res.sendStatus(200);
    }
    next();
};

  // Error handling middleware
function handleError(err: any, req: Request, res: Response, next: NextFunction) {
    if (err) {
        const code = err.scode || 500;
        const message = err.msg || err.message;
        console.warn(`Caught error for ${req.path} (${code}): ${err.stack}`);
        return res.status(code).json({ code, message });
    }
    next();
}

// Create the express application and add all middleware
async function createApp(cfg: Config): Promise<express.Application> {
    const app = express();
    app.set('json spaces', 2);
    app.use(allowCrossDomain);
    app.use(express.json());
    app.use(cookieParser());
    addAuthMiddleware(app, cfg);
    app.use('/api/*', bodyParser.json());
    registerThemesEndpoint(app);
    app.use(handleError);
    // app.use(express.static(path.join(cwd(), 'src/ui/build')));
    app.use(express.static(path.join(__dirname, '../src/ui/build')));
    app.get('/*', function(req: Request, res: Response) {
        // res.sendFile(path.join(cwd(), 'src/ui/build', 'index.html'));
        res.sendFile(path.join(__dirname, '../src/ui/build', 'index.html'));
    });
    return app;
}

async function main() {
    const cfg = new Config();
    const app = await createApp(cfg);
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.info(`Listening on port ${port}`);
    });
}

main();