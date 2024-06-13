import axios from "axios";
import {store} from "./store/store.js";

export const AxiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
});

AxiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
});