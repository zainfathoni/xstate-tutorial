// import { inspect } from "@xstate/inspect";
import { useInterpret } from "@xstate/react";
import { createContext } from "react";
import { authMachine } from "./authMachine";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const authService = useInterpret(authMachine, { devTools: true });

  return (
    <GlobalStateContext.Provider value={{ authService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Uncomment this code block to inspect the state machine
// inspect({
//   // options
//   // url: 'https://stately.ai/viz?inspect', // (default)
//   iframe: false, // open in new window
// });
