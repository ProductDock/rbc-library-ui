import { actions } from "./authActions";
import { IAuthContext } from "./Types";

const reducer = (state: IAuthContext, action: any) => {
  switch (action.type) {
    case actions.SET_LOGGED_USER:
      return {
        ...state,
        userProfile: action.payload,
      };
    case actions.SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
