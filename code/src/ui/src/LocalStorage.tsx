/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Storage, StorageElement } from "a11y-theme-builder-sdk";

const path = "themebuilder-storage-";

export class LocalStorage implements Storage {

    public async get(key: string): Promise<StorageElement> {
        const response = window.localStorage.getItem(path+key);
        //console.log(`LocalStorage.get(${key}) => ${response} type=${typeof response}`);
        let r = {metadata:{}};
        if (response) {
            r = JSON.parse(response);
        }
        return r;
    }

    public async set(key: string, data: StorageElement) {
        //console.log(`LocalStorage.set(${key}, ${value})`);
        const keys = await this.listKeys();
        if (keys.indexOf(key) > -1) {
            const response = window.localStorage.getItem(path+key);
            const existing = JSON.parse(response || "{}");
            window.localStorage.setItem(path+key, JSON.stringify({...existing, ...data}));
            //console.log(`set(${key}) PATCH`);               
        }
        else {
            window.localStorage.setItem(path+key, JSON.stringify(data));
            //console.log(`set(${key}) POST`);               
        }
    }

    public async delete(key: string) {
        //console.log(`LocalStorage.delete(${key})}`);
        window.localStorage.removeItem(path+key);
    }

    public async listKeys(): Promise<string[]> {
        //console.log(`LocalStorage.listKeys()`);
        let keys = Object.keys(window.localStorage);
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

    public async listMetadata(key?: string): Promise<StorageElement[]> {
        const metadata = [];
        const keys = await this.listKeys();
        for (var i=0; i<keys.length; i++) {
            const item = await this.get(keys[i]) as any;
            metadata.push({id: keys[i], metadata: item.metadata});
        }
        return metadata;
    }

}