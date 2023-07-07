import { useInterpret } from "@xstate/react";
import { createContext } from "react";
import { authMachine } from "./authMachine";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const authService = useInterpret(authMachine);

  return (
    <GlobalStateContext.Provider value={{ authService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
