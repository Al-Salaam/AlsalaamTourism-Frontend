import axios from "axios";


export const https = axios.create({
    baseURL: "https://al-salaam-tourism-c93fa215ea59.herokuapp.com/api/v1",
    withCredentials: true
})