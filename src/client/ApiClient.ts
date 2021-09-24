import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://api.github.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/vnd.github.v3+json"
    }
});
