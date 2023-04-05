/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import express, { Request, Response, NextFunction } from "express";

const users: any = {
    "user": "password",
    "admin": "password",
};

const cookieName = "user";

export function addAuthMiddleware(app: express.Application, cfg: any) {

    async function authenticate(req: Request, res: Response, next: NextFunction) {
        // const user = req.cookies[cookieName];
        // console.log(`cookie ${cookieName} = ${user}`);

        if (hasBasicAuthHeader(req)) {
            return await basicAuth(req, res, next);
        }

        console.debug("Sending 401 response with WWW-Authenticate header")
        res.setHeader("WWW-Authenticate", "Basic");
        res.sendStatus(401);
    }

    async function basicAuth(req: Request, res: Response, next: NextFunction) {
        try {
            const base64Credentials: any = req.headers.authorization?.split(' ')[1];
            const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
            const [uid, pwd] = credentials.split(':');
            const user = await loginUser(uid, pwd);
            (req as any)._ctx = user;
            res.cookie(cookieName, user, { maxAge: 86400000, httpOnly: false })
            return next();
        } catch (e) {
            console.debug("Sending 401 response with WWW-Authenticate header")
            res.setHeader("WWW-Authenticate", "Basic");
            res.sendStatus(401);
        }
    }

    function hasBasicAuthHeader(req: Request): boolean {
        return req.headers.authorization != undefined && req.headers.authorization.indexOf('Basic ') >= 0;
    }

    async function loginUser(uid: string, pwd: string): Promise<any> {
        //console.log(`loginUser(${uid}, ${pwd})`)
        if (users[uid] == pwd) {
            return uid;
        }
        console.log(`Basic authentication failed for user ${uid}`)
        throw new Error("401");
    }

    async function passThrough(req: Request, res: Response, next: NextFunction) {
        (req as any)._ctx = "unknown";
        next();
    }

    app.use(async function (req: Request, res: Response, next: NextFunction) {
        console.log(`\nRequest: ${req.path}`);
        if (cfg.authEnabled) {
            return await authenticate(req, res, next);
        } else {
            return await passThrough(req, res, next);
        }
    });

    if (cfg.authEnabled) {
        console.info("Authentication is enabled");
    } else {
        console.info("Authentication is disabled");
    }

}





