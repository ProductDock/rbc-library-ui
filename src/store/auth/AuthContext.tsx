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

export const AuthContext = React.createContext<IAuthContext>(initialState);

const AuthContextProvider = (props: any) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const signOut = async () =>
    authService
      .logout()
      .then(() => {
        dispatch({ type: actions.REMOVE_LOGGED_USER });
      })
      .then(() => localStorage.removeItem("currentPathname"));

  const loadFinished = () => dispatch({ type: actions.AUTH_LOAD_FINISHED });

  const setCurrentPathname = (pathname: string) =>
    localStorage.setItem("currentPathname", pathname);

  const getLoggedInUserInfo = () => {
    const currentPath = localStorage.getItem("currentPathname");

    authService
      .userInfoRequest()
      .then((res) => {
        dispatch({
          type: actions.SET_LOGGED_USER,
          payload: res.data,
        });

        if (currentPath) {
          navigate(currentPath);
        }
      })
      .catch(() => setCurrentPathname(pathname))
      .finally(() => loadFinished());
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
