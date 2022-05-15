import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import Search from './Search';

function Header({title, ion_icon, callback, icon_visible = true}) {
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
    <ContainerHeader search={search || states?.menuOpen} contaisTitle={title} icon_visible={icon_visible} >
      <ion-icon 
        onClick={handleMenu} 
        name={states.menuOpen || title?'chevron-back':'menu'}
      />
      <section>
        <h1>{describeHeader}</h1> 
        <Search open={search} setSearch={setSearch} visible={!title} />
        <span>
          <ion-icon onClick={callback} name={ion_icon}></ion-icon>
        </span>
      </section>
    </ContainerHeader>
  );
}

export default Header;

const ContainerHeader = styled.header`
  --display: ${props => !props.search?'block':'none'};
  --margin: calc(var(--padding-window) * 0.5);
  --font-title: ${props => props.contaisTitle?'1.3rem':'2rem'};
  --display-icon: ${props => props.icon_visible && props.contaisTitle?'flex':'none'};

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
    left: 6px;
    top: auto;
    right: 1px;
    bottom: auto;
    z-index: 2;

    margin-right: 2rem;

    font-family: var(--font-family-logo);
    font-size: var(--font-title);
    font-weight: bold;

    //text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
  }

  &>ion-icon {
    font-size: var(--size-header);
    color: var(--color-4);
  }

  &>ion-icon:hover {
    color: var(--color-hover-inner )
  }

  &>section span {
    --padding: calc(var(--size-header) - 6px);
    display: var(--display-icon);
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 3;
    right: 3px;
    top: 3px;
    width: var(--padding);
    height: var(--padding);

    border-radius: 50%;
    
    box-shadow: var(--shadow);
    background-color: var(--color-gray);
  } 

  &>section span:hover {
    background-color: var(--color-3);
  }

  &>section span ion-icon {
    color: var(--color-1);
    font-size: 1.2rem;
  }
`