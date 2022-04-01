import React, { useContext, useEffect, useReducer } from "react";
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { actions } from "./authActions";
import reducer from "./AuthReducer";
import { TokenStorage } from "./TokenStorage";
import { IAuthContext } from "./Types";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const initialState = {
  userProfile: null,
  isLoggedIn: null,
};

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const onSuccess = (res: any) => {
    const { accessToken } = res;
    console.log(accessToken);

    const { name, email, imageUrl } = res.profileObj;
    dispatch({
      type: actions.SET_LOGGED_USER,
      payload: { name, email, imageUrl, googleAccessToken: accessToken },
    });
    TokenStorage.setAccessToken(res.tokenId);
  };

  const onFailure = (res: any) => {
    // eslint-disable-next-line no-console
    console.log("Login failed: res:", res);
  };

  const signOut = async () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2
        .signOut()
        .then(auth2.disconnect().then(console.log("LOGOUT SUCCESSFUL")));
    }
  };

  useEffect(() => {
    TokenStorage.removeAccessToken();
  }, []);

  const onAutoLoadFinished = (successLogin: boolean) => {
    dispatch({ type: actions.SET_LOGIN_STATUS, payload: successLogin });
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
        signOut,
        loaded,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
