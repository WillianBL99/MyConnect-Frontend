import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import Search from './Search';

function Header({title}) {
  const {states, setStates} = getContext();
  const [search, setSearch] = useState(false);

  const describeHeader = title?title:'MyConnect';
  
  function handleMenu(){
    setStates({...states, menuOpen: !states.menuOpen});
  }

  return (
    <ContainerHeader search={search || states?.menuOpen} >
      <ion-icon onClick={handleMenu} name={states.menuOpen?'chevron-back':'menu'}></ion-icon>
      <section>
        <h1>{describeHeader}</h1> 
        <Search open={search} setSearch={setSearch} />
      </section>
    </ContainerHeader>
  );
}

export default Header;

const ContainerHeader = styled.header`
  --display: ${props => !props.search?'block':'none'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: var(--size-header);

  &>section {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100%;
    height: 100%;

    margin-left: var(--padding-screen-main);

    border-radius: 10px;
  }

  &>section h1 {
    display: var(--display);
    position: absolute;

    z-index: 2;
    font-family: var(--font-family-logo);
    font-size: 2rem;
    font-weight: bold;
  }

  &>ion-icon {
    font-size: var(--size-header);
    color: var(--color-4);
  }

  &>ion-icon:hover {
    color: var(--color-hover-inner )
  }
`