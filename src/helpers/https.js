import axios from "axios";

export const https = axios.create({
    baseURL: `${process.env.URL}/api/v1`, 
    withCredentials: true
})