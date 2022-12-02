/* eslint-disable dot-notation */
type AppEnv = {
  REACT_APP_AUTH_URL: string;
  REACT_APP_API_URL: string;
};

export const getEnvProperties = (): AppEnv => {
  return window["_env_"]
    ? window["_env_"]
    : {
        REACT_APP_API_URL: process.env.REACT_APP_API_URL,
        REACT_APP_AUTH_URL: process.env.REACT_APP_AUTH_URL,
      };
};
