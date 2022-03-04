import { actions } from "./membersActions";
import { IMembersContext } from "./Types";

const reducer = (state: IMembersContext, action: any) => {
  switch (action.type) {
    case actions.SET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case actions.ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
