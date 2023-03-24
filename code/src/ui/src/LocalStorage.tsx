import { Storage } from "a11y-theme-builder-sdk";

const path = "themebuilder-storage-";

export class LocalStorage implements Storage {


    // var v = window.localStorage.getItem("buttons");
    // window.localStorage.setItem("buttons", buttons);
    // window.localStorage.removeItem("uploadAttachments")
// let keys = Object.keys(localStorage);
// console.log("Local storage keys=",keys);
// for (var i in keys) {
//     console.log(keys[i]+"="+localStorage.getItem(keys[i]))
// }


    public async get(key: string): Promise<string> {
        const response = window.localStorage.getItem(path+key);
        //console.log(`LocalStorage.get(${key}) => ${response} type=${typeof response}`);
        return response || "";
    }

    public async set(key: string, value: string) {
        //console.log(`LocalStorage.set(${key}, ${value})`);
        const data = JSON.parse(value);
        //console.log(`data = ${JSON.stringify(data)}`)
        const keys = await this.listKeys();
        if (keys.indexOf(key) > -1) {
            const response = window.localStorage.getItem(path+key);
            const existing = JSON.parse(response || "{}");
            window.localStorage.setItem(path+key, JSON.stringify({...existing, ...data}));
            //console.log(`set(${key}) PATCH`);               
        }
        else {
            window.localStorage.setItem(path+key, value);
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
}