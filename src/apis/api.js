import axios from "axios";

const api = axios.create({
    baseURL: "https://5fd06b951f23740016631890.mockapi.io/api"
})

export default api;