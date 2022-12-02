import axios from "axios";
import { getEnvProperties } from "../utils/envProvider";

const REDIRECT_PATHNAME = "REDIRECT_PATHNAME";
const STATUS_UNAUTHORIZED = 401;

const baseURL = getEnvProperties().REACT_APP_API_URL;
const client = axios.create({ baseURL, withCredentials: true });

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const userInfoEndpoint = "/user-profiles/user-info";

    if (
      error.response.request.responseURL !== `${baseURL}${userInfoEndpoint}` &&
      error.response.status === STATUS_UNAUTHORIZED
    ) {
      const redirectPath = window.location.pathname;
      if (redirectPath && redirectPath !== "/") {
        localStorage.setItem(REDIRECT_PATHNAME, window.location.pathname);
        window.location.href = "/";
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default client;
