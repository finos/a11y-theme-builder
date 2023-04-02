/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
var axios = require('axios');
import { Config } from "./config";
const cfg = new Config();
let errors = false;

async function main() {

    let r;

    if (false) {
        r = await axios.delete(cfg.baseUrl + "/api/themes");
        console.log("deleteDocs =",r.data);
        myAssert(r.data, "Delete database failed")
    }

    try { r = await axios.delete(cfg.baseUrl + "/api/themes/abc"); } catch (e) {}
    try { r = await axios.delete(cfg.baseUrl + "/api/themes/def"); } catch (e) {}
    
    r = await axios.get(cfg.baseUrl + "/api/themes");
    console.log("getDocNames =",r.data);
    myAssert(r.data.length == 0, "getDocNames failed");

    try {
        r = await axios.get(cfg.baseUrl + "/api/themes/abc");
        console.log("getDoc =",r.status, r.statusText);
        myAssert(false, "getDoc did not throw error 404")
    } catch (e:any) {
        console.log("getDoc =", e.response.data)
        myAssert(e.response.status == 404, "getDoc abc did not return 404");
    }

    r = await axios.post(cfg.baseUrl + "/api/themes", {id: "abc", themedata:"123", color:{primary: "red"}});
    console.log("createDoc =",r.data);
    myAssert((r.data) && (r.data.id == "abc"), "createDoc abc failed");

    try {
        r = await axios.post(cfg.baseUrl + "/api/themes", {id: "abc"});
        console.log("createDoc =",r.status, r.statusText);
        myAssert(false, "createDoc did not throw error 502")
    } catch (e:any) {
        console.log("createDoc =", e.response.data)
        myAssert(e.response.status == 502, "getDoc abc did not return 502");
    }

    r = await axios.get(cfg.baseUrl + "/api/themes/abc");
    console.log("getDoc =",r.data);
    myAssert((r.data) && (r.data.id == "abc"), "getDoc abc failed");

    r = await axios.post(cfg.baseUrl + "/api/themes", {id: "def", themedata:"456", color:{primary: "blue"}});
    console.log("createDoc =",r.data);
    myAssert((r.data) && (r.data.id == "def"), "createDoc def failed");

    r = await axios.get(cfg.baseUrl + "/api/themes/def");
    console.log("getDoc =",r.data);
    myAssert((r.data) && (r.data.id == "def"), "getDoc def failed");

    r = await axios.get(cfg.baseUrl + "/api/themes");
    console.log("getDocNames =",r.data);
    myAssert(r.data.length == 2, "getDocNames failed");

    r = await axios.patch(cfg.baseUrl + "/api/themes/def", {themedata:"4567", color:{primary: "green"}});
    console.log("updateDoc =",r.data);
    //myAssert((r.data) && (r.data.themedata == "4567") && (r.data.color.primary == "green"), "updateDoc def failed");
    myAssert((r.data == true), "updateDoc def failed");

    r = await axios.get(cfg.baseUrl + "/api/themes/def");
    console.log("getDoc =",r.data);
    myAssert((r.data) && (r.data.id == "def"), "getDoc def failed");

    r = await axios.patch(cfg.baseUrl + "/api/themes/def?returnDoc=true", {$set: {"color.primary": "brown", "color.secondary": "black"}});
    console.log("updateDoc =",r.data);
    myAssert((r.data) && (r.data.themedata == "4567") && (r.data.color.primary == "brown"), "updateDoc def failed");
    //myAssert((r.data == true), "updateDoc def failed");

    r = await axios.get(cfg.baseUrl + `/api/themes/def?fields=color`);
    console.log("getDoc =",r.data);
    myAssert((r.data) && (r.data.color.primary == "brown") && (r.data.color.secondary == "black"), "getDoc def failed");

    r = await axios.get(cfg.baseUrl + `/api/themes/def?fields=color.primary`);
    console.log("getDoc =",r.data);
    myAssert((r.data) && (r.data.color.primary == "brown") && (r.data.color.secondary == undefined), "getDoc def failed");

    r = await axios.delete(cfg.baseUrl + "/api/themes/abc");
    console.log("deleteDoc =",r.data);
    myAssert((r.data) && (r.data.id == "abc"), "deleteDoc abc failed");

    try {
        r = await axios.get(cfg.baseUrl + "/api/themes/abc");
        console.log("getDoc =",r.status, r.statusText);
        myAssert(false, "getDoc did not throw error 404")
    } catch (e:any) {
        console.log("getDoc =", e.response.data)
        myAssert(e.response.status == 404, "getDoc did not return 404");
    }

    r = await axios.get(cfg.baseUrl + "/api/themes");
    console.log("getDocNames =",r.data);
    myAssert(r.data.length == 1, "getDocNames failed");

    try {
        r = await axios.post(cfg.baseUrl + "/api/themes", {});
        console.log("postDoc =",r.status, r.statusText);
        myAssert(false, "createDoc did not throw error 501")
    } catch (e:any) {
        console.log("postDoc =", e.response.data)
        myAssert(e.response.status == 501, "getDoc did not return 500");
    }

    r = await axios.delete(cfg.baseUrl + "/api/themes/def");
    console.log("deleteDoc =",r.data);
    myAssert(r.data.id == "def" && r.data.themedata == "4567", "deleteDoc failed");

    try {
        r = await axios.get(cfg.baseUrl + "/api/themes/def");
        console.log("getDoc =",r.status, r.statusText);
        myAssert(false, "getDoc did not throw error 404")
    } catch (e:any) {
        console.log("getDoc =", e.response.data)
        myAssert(e.response.status == 404, "getDoc did not return 404");
    }

    r = await axios.get(cfg.baseUrl + "/api/themes");
    console.log("getDocNames =",r.data);
    myAssert(r.data.length == 0, "getDocNames failed");

    r = await axios.get(cfg.baseUrl + "/");
    //console.log("getHtml =",r.data);
    myAssert(r.data.indexOf("You need to enable JavaScript to run this app") > -1, "Failed getting HTML");

    if (errors) {
        console.error(">>> FAILED <<<");
    }
    else {
        console.log(">>> PASSED <<<");
    }
}

function myAssert(pass:boolean, message:string) {
    if (!pass) {
        errors = true;
        console.error(">>> Assert Failed: " + message);
    }
}

main();
