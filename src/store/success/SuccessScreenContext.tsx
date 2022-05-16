/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import React, { useContext, useEffect, useReducer } from "react";
import { actions } from "./SuccessScreenActions";
import { ISuccessScreenContext } from "./Types";
import reducer from "./SuccessScreenReducer";

const initialState = {
  successMessage: "",
  showed: false,
};

type Props = {
  children: any;
};

export const SuccessScreenContext =
  React.createContext<ISuccessScreenContext>(initialState);

const SuccessScreenContextProvider = ({ children }: Props) => {
  const [successState, dispatch] = useReducer(reducer, initialState);

  const showSuccessScreen = (successMessage: string) =>
    dispatch({ type: actions.SHOW_SUCCESS_SCREEN, payload: successMessage });

  const hideSuccessScreen = () =>
    dispatch({ type: actions.HIDE_SUCCESS_SCREEN });

  useEffect(() => {
    const { showed } = successState;
    if (showed) {
      setTimeout(() => {
        hideSuccessScreen();
      }, 2000);
    }
  }, [successState.showed]);

  return (
    <SuccessScreenContext.Provider
      value={{
        ...successState,
        showSuccessScreen,
      }}
    >
      {children}
    </SuccessScreenContext.Provider>
  );
};

export default SuccessScreenContextProvider;

export const useSuccessScreenContext = () => useContext(SuccessScreenContext);
