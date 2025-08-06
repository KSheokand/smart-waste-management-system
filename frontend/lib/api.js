import axios from 'axios';

const API = axios.create({
    baseURL: 'https://your-backend-url.com/api', // Replace with actual backend URL or localhost
});

API.interceptors.request.use((req) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
