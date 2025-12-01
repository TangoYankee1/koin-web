import axios from 'axios';

const api = axios.create({
    baseURL: 'https://koin-api.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

export default api;