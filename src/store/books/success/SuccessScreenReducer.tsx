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
    case actions.HIDE_SUCCESS_SCREEN:
      return {
        ...state,
        successMessage: "",
        gratitudeMessage: "",
        showed: false,
      };
    default:
      return state;
  }
};

export default reducer;
