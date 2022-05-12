import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';

function Search({search, setSearch}){
  const [openSearch, setOpenSearch] = useState(search);
  const {states} = getContext();

  function handleSearc(){
    setSearch(!openSearch)
    setOpenSearch(!openSearch);
  }

  return (
    <ContainerSearch search={openSearch || states?.menuOpen} > 
      <input type="search" name="" id="" />
      <ion-icon onClick={handleSearc} name="search"></ion-icon>
    </ContainerSearch>
  );
}

export default Search;

const ContainerSearch = styled.article`
  --display: ${props => props.search?'block':'none'};

  display: flex;
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 10px;

  &>ion-icon {
    --size: 1.5rem;
    font-size: 1.5rem;
    z-index: 3;
    position: absolute;
    right: 5px;
    top: calc(calc(var(--size-header)/2) - calc(var(--size)/2));
  }

  &>input {
    display: var(--display);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    border-radius: 10px;
  }
`