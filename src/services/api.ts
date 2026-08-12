import axios from "axios";

const api = axios.create({
  baseURL: "https://traval-taste-backend.onrender.com/api",
  timeout: 30000,
});

export default api;