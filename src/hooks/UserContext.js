import react, { useState } from 'react';

import persistUser from '../utils/persistUser';

const context = react.createContext();

export function Provider(props) {
  const [user, setUser] = react.useState(persistUser);
  const [states, setStates] = react.useState({ menuOpen: false });
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [windowsState, setWindowsState] = useState({
    windowOpen: false,
    window: 'cart'
  });
  const [productClicked, setProductClicked] = useState({});
  const [searchText, setSearchText] = useState('');
	  const url = 'https://my-connect.herokuapp.com';

  return (
    <context.Provider
      value={{
        user,
        setUser,
        states,
        setStates,
        windowsState,
        setWindowsState,
        productClicked,
        setProductClicked,
        searchText,
        setSearchText,
        selectedCategory,
        setSelectedCategory,
        url
      }}

    >
      {props.children}

    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);
