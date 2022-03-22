import Keycloak from "keycloak-js";

const keycloak = new (Keycloak as any)({
  url: process.env.REACT_APP_KEYCLOAK_URL || "http://localhost:8180",
  realm: process.env.REACT_APP_KEYCLOAK_REALM || "productdock",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT || "rbc-library",
});

export default keycloak;
