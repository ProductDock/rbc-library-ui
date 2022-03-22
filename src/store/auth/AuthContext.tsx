import React, { useContext, useEffect, useReducer } from "react";
import { useGoogleLogin } from "react-google-login";
import { addTokenToLocalStorage, removeTokenFromLocalStorage } from "../../util/authUtil";
import { actions } from "./authActions";
import reducer from "./AuthReducer";
import { IAuthContext } from "./Types";

const clientId = "817921738258-jfbapkf5tsqmbgjrn672ua2udsuta7vt.apps.googleusercontent.com";

const initialState = {
  userProfile: null,
  isLoggedIn: null,
};

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const onSuccess = (res: any) => {
    const { name, email, imageUrl } = res.profileObj;
    dispatch({ type: actions.SET_LOGGED_USER, payload: { name, email, imageUrl } });
    addTokenToLocalStorage(res.tokenId);
  };

  const onFailure = (res: any) => {
    // eslint-disable-next-line no-console
    console.log("Login failed: res:", res);
  };

  useEffect(() => {
    removeTokenFromLocalStorage();
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
    redirectUri: `http://localhost:3000/example`,
    uxMode: "redirect",
  });

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        signIn,
        loaded,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
