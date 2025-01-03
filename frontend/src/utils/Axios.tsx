import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://ai-code-generator-backend.onrender.com/api/v1/",
});

export { AxiosClient };
