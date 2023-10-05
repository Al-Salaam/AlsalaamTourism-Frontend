import axios from "axios";

export const https = axios.create({
    baseURL: "https://lonely-long-johns-crow.cyclic.app/api/v1", 
    withCredentials: true
})