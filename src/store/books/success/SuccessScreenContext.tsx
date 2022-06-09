import React, { useContext, useEffect, useReducer } from "react";
import { useMediaQuery } from "@mui/material";
import { actions } from "./SuccessScreenActions";
import { ISuccessScreenContext } from "./Types";
import reducer from "./SuccessScreenReducer";
import { MediaQueries } from "../../../constants/mediaQueries";

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
  const isLargeScreen = useMediaQuery(MediaQueries.LARGE);

  const showSuccessScreen = (successMessage: string) =>
    dispatch({ type: actions.SHOW_SUCCESS_SCREEN, payload: successMessage });

  const hideSuccessScreen = () =>
    dispatch({ type: actions.HIDE_SUCCESS_SCREEN });

  useEffect(() => {
    const { showed } = successState;
    if (showed) {
      setTimeout(
        () => {
          hideSuccessScreen();
        },
        isLargeScreen ? 5000 : 2000
      );
    }
  }, [successState.showed]);

  return (
    <SuccessScreenContext.Provider
      value={{
        ...successState,
        showSuccessScreen,
        hideSuccessScreen,
      }}
    >
      {children}
    </SuccessScreenContext.Provider>
  );
};

export default SuccessScreenContextProvider;

export const useSuccessScreenContext = () => useContext(SuccessScreenContext);
