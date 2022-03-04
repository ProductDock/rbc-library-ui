import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const client = axios.create({ baseURL });

client.interceptors.request.use((config) => config);

export default client;
