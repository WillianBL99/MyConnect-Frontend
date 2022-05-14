import react, { useState } from "react";

import persistUser from "../utils/persistUser";

const context = react.createContext();

export function Provider(props) {
    const [user, setUser] = react.useState(persistUser);
    const [states, setStates] = react.useState({menuOpen: false})
    const [windowsState, setWindowsState] = useState({
      windowOpen: false,
      window: 'cart'
    });
    const [productClicked, setProductClicked] = useState('')
	  const url = 'http://192.168.1.6:5000';
    
  return (
    <context.Provider 
      value={{
        user, setUser,
        states, setStates, 
        windowsState, setWindowsState, 
        productClicked, setProductClicked,
        url 
      }}

    >{props.children}</context.Provider>
  );
}
export const getContext = () => react.useContext(context);
