import axios from "axios";

const API = axios.create({
  baseURL: "http://task-manager-web-app-2.onrender.com/",
});

export default API;
