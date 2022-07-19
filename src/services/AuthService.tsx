import client from "./client";

export const userInfoRequest = async () => client.get(`/user-info`);
export const logout = async () => client.post(`/logout`);
