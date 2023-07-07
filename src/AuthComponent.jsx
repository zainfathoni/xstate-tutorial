import { useSelector } from "@xstate/react";
import { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const AuthComponent = () => {
  const globalServices = useContext(GlobalStateContext);

  const isLoggedIn = useSelector(globalServices.authService, (state) =>
    state.matches("authenticated"),
  );

  const { send } = globalServices.authService;

  return (
    <>
      {isLoggedIn ? (
        <button onClick={() => send("LOGOUT")}>Logout</button>
      ) : (
        <button onClick={() => send("LOGIN")}>Login</button>
      )}
    </>
  );
};
