import React, { useContext, useEffect, useReducer } from "react";
import { useGoogleLogin } from "react-google-login";
import { actions } from "./authActions";
import reducer from "./AuthReducer";
import { TokenStorage } from "./TokenStorage";
import { IAuthContext } from "./Types";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const initialState = {
  userProfile: null,
  isLoggedIn: null,
  redirected: false,
};

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const onSuccess = (res: any) => {
    const { name, email, imageUrl } = res.profileObj;
    dispatch({ type: actions.SET_LOGGED_USER, payload: { name, email, imageUrl } });
    TokenStorage.setAccessToken(res.tokenId);
  };

  const onFailure = (res: any) => {
    // eslint-disable-next-line no-console
    console.log("Login failed: res:", res);
  };

  useEffect(() => {
    TokenStorage.removeAccessToken();
    dispatch({ type: actions.SET_USER_REDIRECTED_TO_LOGIN, payload: false });
  }, []);

  const onAutoLoadFinished = (successLogin: boolean) => {
    dispatch({ type: actions.SET_LOGIN_STATUS, payload: successLogin });
  };

  const userRedirect = () => {
    dispatch({ type: actions.SET_USER_REDIRECTED_TO_LOGIN, payload: true });
  };

  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    onFailure,
    onAutoLoadFinished,
    clientId,
    isSignedIn: true,
  });

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        signIn,
        userRedirect,
        loaded,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
