import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-web-app-2.onrender.com/",
});

export default API;
