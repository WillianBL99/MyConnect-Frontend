import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';

function Search({ search, setSearch, visible }) {
  const [openSearch, setOpenSearch] = useState(search);
  const { states, setSearchText } = getContext();
  const [currentSearchText, setCurrentSearchText] = useState('');

  function handleSearc() {
    if (openSearch) {
      setSearchText(currentSearchText);
      setCurrentSearchText('');
    }
    setSearch(!openSearch);
    setOpenSearch(!openSearch);
  }

  return (
    <ContainerSearch search={openSearch || states?.menuOpen} visible={visible}>
      <input type="search" value={currentSearchText} onChange={(e) => setCurrentSearchText(e.target.value)} />
      <ion-icon onClick={handleSearc} display="none" name="search" />
    </ContainerSearch>
  );
}

export default Search;

const ContainerSearch = styled.article`
  --display: ${(props) => (props.search ? 'block' : 'none')};
  --display-search: ${(props) => (props.visible ? 'block' : 'none')};
  --background-color: ${(props) => (props.visible ? 'none' : 'var(--color-2)')};
  --box-shadow: ${(props) => (props.visible ? 'none' : 'var(--shadow)')};

  display: flex;
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: var(--radius-main);
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);

  &>ion-icon {
    --size: 1.5rem;

    display: var(--display-search);
    
    position: absolute;
    z-index: 3;
    top: calc(calc(var(--size-header)/2) - calc(var(--size)/2));
    right: 5px;

    font-size: 1.5rem; 
    color: var(--color-4);
  }

  &>input {
    display: var(--display);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    border-radius: var(--radius-main);
    background-color: var(--color-2);
  }
`;
