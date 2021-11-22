import { appConstants } from "./appConstants";

export const getConfig = (params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem(appConstants.AUTH_TOKEN),
        },
    };

    if(params) config["params"]=params;
    return config;
};

export const postConfig = (body) => {
    const config = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem(appConstants.AUTH_TOKEN),
        },
        body: JSON.stringify(body),
    };

    return config;
};


export const getHeaders = () => {
    const headers = {
        Authorization: localStorage.getItem(appConstants.AUTH_TOKEN)
    }
    return headers;
};