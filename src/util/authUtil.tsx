// import keycloak from "../keycloak";

export const getAuthHeaderValue = () => {
  // const { token } = keycloak;
  const token = localStorage.getItem("accessToken");
  return token ? `Bearer ${token}` : "";
};
