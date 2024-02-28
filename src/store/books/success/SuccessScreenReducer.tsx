import { actions } from "./SuccessScreenActions";
import { ISuccessScreenContext } from "./Types";

const reducer = (state: ISuccessScreenContext, action: any) => {
  switch (action.type) {
    case actions.SHOW_SUCCESS_SCREEN:
      return {
        ...state,
        successMessage: action.payload.successMessage,
        gratitudeMessage: action.payload.gratitudeMessage,
        showed: true,
      };
    case actions.SHOW_WARNING_SCREEN:
      return {
        ...state,
        successMessage: action.payload.successMessage,
        gratitudeMessage: action.payload.gratitudeMessage,
        showed: true,
        warning: true,
      };
    case actions.HIDE_SUCCESS_SCREEN:
      return {
        ...state,
        successMessage: "",
        gratitudeMessage: "",
        showed: false,
        warning: false,
      };
    default:
      return state;
  }
};

export default reducer;
