/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

export class AxiosError {
    status: number;
    statusText: string;
    message: string; 

    constructor(e:any) {
        //super(e);
        if (e.response) {
            this.status = e.response.status;
            this.statusText = e.response.statusText;
            this.message = e.response.data.message;
        }
        else {
            this.status = 500;
            this.statusText = "Unknown error calling server"
            this.message = "Unknown error calling server"
        }
    }

    getStatus():number {
        return this.status;
    }
    getStatusText():string {
        return this.statusText;
    }
    getMessage():string {
        return this.message;
    }
    toString():string {
        return `Http error: status=${this.getStatus()} statusText="${this.getStatusText()}" message="${this.getMessage()}`;
    }
    toString1(): string {
        return JSON.stringify(this);
    }
}

export class Http {
    baseUrl: string;
    auth: any;
    private static instance: Http;

    constructor(url:string) {
        console.log(`Http(${url})`)
        this.baseUrl = url;
    }

    public static init(baseUrl: string, username?: string, password?: string): Http {
        console.log(`Http.init(${baseUrl})`)
        if (this.instance !== undefined) {
            return this.instance;
        } 
        this.instance = new Http(baseUrl);
        this.instance.baseUrl = baseUrl;
        if (username !== undefined && password !== undefined) {
            this.instance.auth = {username, password};
        }
        return this.instance;
    }

    public static getInstance(): Http {
        console.log("Http.getInstance()");
        return this.instance;
    }

    public async get(url:string, config?:AxiosRequestConfig<any>):Promise<AxiosResponse<any, any>> {
        console.log(`get(${url})`);
        let _url = url;
        if (!url.startsWith("http")) {
            _url = this.baseUrl + url;
        }
        if (this.auth) {
            if (config === undefined) {
                config = {auth: this.auth};
            }
            else {
                config = {...config, auth: this.auth}
            }
        }
        try {
            const response = await axios.get(_url, config);
            return response;
        } catch (e) {
            throw(e);
        }
    }

    public async post(url:string, data?:any, config?:AxiosRequestConfig<any>):Promise<AxiosResponse<any, any>> {
        console.log(`post(${url})`);
        let _url = url;
        if (!url.startsWith("http")) {
            _url = this.baseUrl + url;
        }
        let c:any = config ? config : {headers: {"Content-type": "application/json"}};
        if (this.auth) {
            c = {...c, auth: this.auth}
        }
        try {
            const response = await axios.post(_url, data, c);
            return response;
        } catch (e) {
            throw(e);
        }
    }

    public async patch(url:string, data?:any, config?:AxiosRequestConfig<any>):Promise<AxiosResponse<any, any>> {
        console.log(`patch(${url})`);
        let _url = url;
        if (!url.startsWith("http")) {
            _url = this.baseUrl + url;
        }
        try {
            let c:any = config ? config : {headers: {"Content-type": "application/json"}};
            if (this.auth) {
                c = {...c, auth: this.auth}
            }
            const response = await axios.patch(_url, data, c);
            return response;
        } catch (e) {
            throw(e);
        }
    }

    public async delete(url:string, config?:AxiosRequestConfig<any>):Promise<AxiosResponse<any, any>> {
        console.log(`delete(${url})`);
        let _url = url;
        if (!url.startsWith("http")) {
            _url = this.baseUrl + url;
        }
        if (this.auth) {
            if (config === undefined) {
                config = {auth: this.auth};
            }
            else {
                config = {...config, auth: this.auth}
            }
        }
        try {
            const response = await axios.delete(_url, config);
            return response;
        } catch (e) {
            throw(e);
        }
    }
}
