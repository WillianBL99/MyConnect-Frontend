import react from "react";

import persistUser from "../utils/persistUser";

const context = react.createContext();

export function Provider(props) {
    const [user, setUser] = react.useState(persistUser);
	const url = 'http://localhost:5000';

  return (
    <context.Provider value={{user, setUser, url}}>
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);
