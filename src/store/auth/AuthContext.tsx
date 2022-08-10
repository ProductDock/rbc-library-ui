import React, { useContext, useEffect, useReducer } from "react";
import { actions } from "./authActions";
import reducer from "./AuthReducer";
import { IAuthContext } from "./Types";
import * as authService from "../../services/AuthService";

const initialState = {
  userProfile: null,
  isLoggedIn: null,
};

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const signOut = async () => {
    authService.logout().then(() => {
      dispatch({ type: actions.REMOVE_LOGGED_USER });
    });
  };

  const getLoggedInUserInfo = () => {
    authService.userInfoRequest().then((res) => {
      dispatch({
        type: actions.SET_LOGGED_USER,
        payload: res.data,
      });
    });
  };

  useEffect(() => {
    dispatch({ type: actions.REMOVE_LOGGED_USER });
    getLoggedInUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
