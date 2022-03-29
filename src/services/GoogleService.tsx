import axios from "axios";

const OAUTH2_REVOKE_API = "https://accounts.google.com/o/oauth2/revoke";

export const revokeOauth2Token = (token: string) => {
  const data = new FormData();
  data.append("xsrfToken", "");
  data.append("token", token);

  return axios.post(OAUTH2_REVOKE_API, data);
};
