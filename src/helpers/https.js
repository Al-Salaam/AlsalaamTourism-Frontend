import axios from "axios";


export const https = axios.create({
    // baseURL: "https://al-salaam-tourism-c93fa215ea59.herokuapp.com/api/v1",
    // baseURL: "http://localhost:8000/api/v1",
    baseURL: "https://al-salaamtourism-backend.vercel.app/api/v1",
    withCredentials: true
})