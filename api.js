import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.1.1.3:3333'
})

export default api;