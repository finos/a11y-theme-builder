/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import { Http } from './Http';

export class LocaleMgr {
    private http: Http = Http.getInstance();

    public async get(key?: string): Promise<string> {
        const response = await this.http.get("/api/locale/" + key);
        console.log(`get(${key}) => ${JSON.stringify(response.data)}`);
        return JSON.stringify(response.data);
    }

    public async set(data: any) {
        //console.log(`data = ${JSON.stringify(data)}`)
        const response = await this.http.post(`/api/locale`, data);
        //console.log(`set(${key}) POST => ${JSON.stringify(response.data)}`);               
        return JSON.stringify(response.data);
    }

    // public async delete(key: string) {
    //     const response = await this.http.delete(`/api/themes/${key}`);
    //     //console.log(`delete(${key}) => ${JSON.stringify(response.data)}`);
    // }

}