import axios from "axios";
import { getAuthHeaderValue } from "../util/authUtil";

const baseURL = process.env.REACT_APP_API_URL;
const client = axios.create({ baseURL });

client.interceptors.request.use((config) => {
  config!.headers!.Authorization = getAuthHeaderValue();
  return config;
});

export default client;
