import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import Search from './Search';

function Header({title}) {
  const {states, setStates, windowsState, setWindowsState} = getContext();
  const [search, setSearch] = useState(false);

  const describeHeader = title?title:'MyConnect';
  
  function handleMenu(){
    if(title){
      setWindowsState({...windowsState, windowOpen: false});
    } else {
      setStates({...states, menuOpen: !states.menuOpen});
    }
  }

  return (
    <ContainerHeader search={search || states?.menuOpen} contaisTitle={title} >
      <ion-icon 
        onClick={handleMenu} 
        name={states.menuOpen || title?'chevron-back':'menu'}
      />
      <section>
        <h1>{describeHeader}</h1> 
        <Search open={search} setSearch={setSearch} visible={!title} />
      </section>
    </ContainerHeader>
  );
}

export default Header;

const ContainerHeader = styled.header`
  --display: ${props => !props.search?'block':'none'};
  --margin: calc(var(--padding-window) * 0.5);
  --font-title: ${props => props.contaisTitle?'1.3rem':'2rem'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: var(--size-header);
  margin-block: var(--margin);
  padding-inline: var(--margin);

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

    padding-right: calc( var(--size-icon) - 0.5rem);

    z-index: 2;
    font-family: var(--font-family-logo);
    font-size: var(--font-title);
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