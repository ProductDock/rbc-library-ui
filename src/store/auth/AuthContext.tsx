import React, { useContext, useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router";
import { actions } from "./authActions";
import reducer from "./AuthReducer";
import { IAuthContext } from "./Types";
import * as authService from "../../services/AuthService";

const initialState = {
  userProfile: null,
  isLoggedIn: null,
  loaded: false,
};

const REDIRECT_PATHNAME = "REDIRECT_PATHNAME";
const STATUS_UNAUTHORIZED = 401;

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();
  const { pathname, search } = location;

  const navigate = useNavigate();

  const signOut = async () =>
    authService
      .logout()
      .then(() => {
        dispatch({ type: actions.REMOVE_LOGGED_USER });
      })
      .then(() => localStorage.removeItem(REDIRECT_PATHNAME));

  const loadFinished = () => dispatch({ type: actions.AUTH_LOAD_FINISHED });

  const setRedirectPathname = (pathname: string) =>
    localStorage.setItem(REDIRECT_PATHNAME, pathname);

  const redirectToPreviousPage = () => {
    const redirectPath = localStorage.getItem(REDIRECT_PATHNAME);

    if (redirectPath) {
      navigate(redirectPath);
      localStorage.removeItem(REDIRECT_PATHNAME);
    }
  };

  const handleUnauthorizedError = (reason: any) => {
    if (reason?.response?.status === STATUS_UNAUTHORIZED) {
      setRedirectPathname(`${pathname}${search}`);
    }
  };

  const completeLogin = (successHandler: Function, errorHandler: Function) => {
    authService
      .userInfoRequest()
      .then((res) => {
        dispatch({
          type: actions.SET_LOGGED_USER,
          payload: res.data,
        });

        successHandler();
      })
      .catch((reason) => errorHandler(reason))
      .finally(() => loadFinished());
  };

  useEffect(() => {
    dispatch({ type: actions.REMOVE_LOGGED_USER });
    completeLogin(redirectToPreviousPage, handleUnauthorizedError);
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
