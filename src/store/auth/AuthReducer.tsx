import { actions } from "./authActions";
import { IAuthContext } from "./Types";

const reducer = (state: IAuthContext, action: any) => {
  switch (action.type) {
    case actions.SET_LOGGED_USER:
      return {
        ...state,
        userProfile: { ...action.payload },
        isLoggedIn: true,
      };
    case actions.REMOVE_LOGGED_USER:
      return {
        ...state,
        isLoggedIn: null,
        userProfile: null,
      };
    default:
      return state;
  }
};

export default reducer;
