import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export { AxiosClient };
