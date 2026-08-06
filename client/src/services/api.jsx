import axios from "axios";

const api = axios.create({
    baseURL: "https://skillconnect-project.onrender.com/api"
});

export default api;