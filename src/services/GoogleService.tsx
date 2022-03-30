import axios from "axios";

const OAUTH2_REVOKE_API = process.env.REACT_APP_OAUTH2_REVOKE_API || "";

export const revokeOauth2Token = (token: string) => {
  const data = new FormData();
  data.append("token", token);

  return axios.post(OAUTH2_REVOKE_API, data);
};
