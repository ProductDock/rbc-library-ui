/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState } from "react";
import * as memberService from "../../services/MemberService";
import { actions } from "./membersActions";
import reducer from "./membersReducer";
import { IMembersContext, Member } from "./Types";

const initialState = {
  members: [],
  loading: false,
  error: null,
};

export const MemebersContext = React.createContext<IMembersContext>(initialState);

const MemebersContextProvider = (props: any) => {
  const [membersState, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findAllMembers = () => {
    setLoading(true);
    memberService
      .fetchAllMembers()
      .then((resp) => dispatch({ type: actions.SET_MEMBERS, payload: resp.data }))
      .catch((err) => setError("Error while fetching data"));
    setLoading(false);
  };

  const createMember = (member: Member) => {
    memberService
      .createMember(member)
      .then((resp) => dispatch({ type: actions.ADD_MEMBER, payload: { ...member, id: resp.data } }))
      .catch((err) => setError("Error while creating member"));
  };

  return (
    <MemebersContext.Provider
      value={{
        ...membersState,
        loading,
        error,
        findAllMembers,
        createMember,
      }}
    >
      {props.children}
    </MemebersContext.Provider>
  );
};
export default MemebersContextProvider;

export const useMembersContext = () => useContext(MemebersContext);
