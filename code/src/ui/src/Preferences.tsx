/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */

const prefix = "themebuilder-pref-";

export class Preferences {
    
    public designSystemName: string;

    constructor(designSystemName: string) {
        this.designSystemName = designSystemName;
    }

    public get(key: string): string {
        const n = `${prefix}${this.designSystemName}-${key}`;
        const r = window.localStorage.getItem(n);
        console.log(`Preferences.get(${key}): ${n}=${r}`);
        return r || "";
    }

    public set(key: string, data: string) {
        const n = `${prefix}${this.designSystemName}-${key}`;
        console.log(`Preferences.set(${key}): ${n}=${data}`);
        window.localStorage.setItem(n, data);
    }

    public delete(key: string) {
        const n = `${prefix}${this.designSystemName}-${key}`;
        console.log(`Preferences.delete(${key}): ${n}`);
        window.localStorage.removeItem(n);
    }

    public deleteAll() {
        const keys = this.listKeys();
        for (var i in keys) {
            this.delete(keys[i]);
        }
    }

    public listKeys(): string[] {
        console.log(`Preferences.listKeys()`);
        let keys = Object.keys(window.localStorage);
        const path = prefix + (this.designSystemName ? `${this.designSystemName}-` : "");
        const data = [];
        const start = path.length;
        for (var i in keys) {
            //console.log(keys[i]+"="+localStorage.getItem(keys[i]))
            if (keys[i].startsWith(path)) {
                data.push(keys[i].substring(start));
            }
        }
        return data;
    }
}