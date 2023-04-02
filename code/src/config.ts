/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
export class Config {

    public readonly baseUrl: string;
    public readonly corsOrigin: string;
    public readonly authEnabled: boolean;

    constructor() {
        this.baseUrl = getStr("BASE_URL", "http://localhost:3001");
        this.corsOrigin = getStr("CORS_ORIGIN", "*");
        this.authEnabled = getBool("AUTH_ENABLED", false);
    }

}

function getStr(name: string, def?: string): string {
    if (name in process.env) {
       return process.env[name] as string;
    }
    if (def !== undefined) {
        return def;
    }
    throw Error(`Environment variable '${name}' is not set`);
}

function getBool(name: string, def: boolean): boolean {
    if (name in process.env) {
        return process.env[name]?.toLowerCase() === "true";
    }
    return def;
}