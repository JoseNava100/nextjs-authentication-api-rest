import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.LARAVEL_API_URL, 
    timeout: 10000, 
    withCredentials: true,
});

export default apiClient;
