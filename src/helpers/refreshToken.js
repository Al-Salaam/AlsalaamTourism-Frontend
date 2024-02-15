import { https } from "./https";

const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await https.post('/auth/refresh-token', { refreshToken });
        const { accessToken } = response.data;
        // Update the access token in local storage
        localStorage.setItem('accessToken', accessToken);
        
        // Return the new access token
        return accessToken;
    } catch (error) {
        throw error;
    }
};

export default refreshAccessToken;
