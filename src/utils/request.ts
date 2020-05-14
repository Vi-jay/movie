import axios from "axios";
import * as lodash from "lodash";
import {BACKEND_PATH, uploadPath} from "@/config/properties";
import {convertRequestDate} from "@/utils/index";

/*** ================初始化====================== ***/
const defaultHeaders = () => {
    const header = {};
    const Authorization = localStorage.getItem("Authorization");
    const gameId = localStorage.getItem("gameId");
    Authorization && (header["Authorization"] = Authorization);
    gameId && (header["gameId"] = gameId);
    return header;
};
const httpInstance = axios.create({
    baseURL: BACKEND_PATH,
    transformRequest: [function (data, {post, put}) {
        post['Content-Type'] = "application/json";
        put['Content-Type'] = "application/json";
        return JSON.stringify(convertRequestDate(data))
    }],
});

/*** ================请求====================== ***/
async function requestByUpload(obj, path = uploadPath) {
    const formData = lodash.reduce(obj, (formData, val, key) => {
        formData.append(key, val);
        return formData;
    }, new FormData());
    const headers = {...defaultHeaders(), 'Content-Type': 'multipart/form-data'};
    const res = await httpInstance.post(path, formData, {headers});
    return res.data;
}

async function requestByGet(url, params, config) {
    if (!url) return;
    const res = await httpInstance.get(url, {
        params,
        headers: defaultHeaders(),
        ...config
    });
    console.log("%c【REQUEST】=========>", "color:#409EFF", res.data.data);
    return res.data;
}

async function requestByPost(url, data = {}) {
    if (!url) return;
    const config = {headers: defaultHeaders()};
    const res = await httpInstance.post(url, data, config);
    console.log("%c【REQUEST】=========>", "color:#409EFF", res.data.data);
    return res.data;
}

export {
    requestByGet, requestByPost, requestByUpload
}
