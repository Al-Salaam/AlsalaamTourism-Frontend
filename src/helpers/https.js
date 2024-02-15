import axios from "axios";
import refreshAccessToken from "./refreshToken";


export const https = axios.create({
    // baseURL: "https://al-salaam-tourism-c93fa215ea59.herokuapp.com/api/v1",
    // baseURL: "http://localhost:8000/api/v1",
     baseURL: "https://al-salaamtourism-backend.vercel.app/api/v1",
    withCredentials: true
})

https.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    const acceptsCookies = navigator.cookieEnabled; // Check if the browser accepts cookies

    if (token && acceptsCookies) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['X-Access-Token'] = token; // Send token in headers if cookies are not accepted
    }
    return config;
}, error => {
    return Promise.reject(error);
});

https.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const newAccessToken = await refreshAccessToken();
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return https(originalRequest);
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});