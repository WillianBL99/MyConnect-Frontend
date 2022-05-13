import react, { useState } from "react";

import persistUser from "../utils/persistUser";

const context = react.createContext();

export function Provider(props) {
    const [user, setUser] = react.useState(persistUser);
    const [states, setStates] = react.useState({menuOpen: false})
    const [windowsState, setWindowsState] = useState({
      windowOpen: false,
      window: 'cart' // cart, historic
    });
	  const url = 'http://localhost:5000';
    console.log('window', windowsState.windowOpen)

  return (
    <context.Provider value={{user, setUser, states, setStates, windowsState, setWindowsState, url }}>
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);
