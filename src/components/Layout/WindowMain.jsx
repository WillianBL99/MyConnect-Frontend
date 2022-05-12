import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';

function WindowMain(){
  const {states, setStates} = getContext();
  
  function handleMenu(){
    console.log('clicou', states)
    setStates({...states, menuOpen: !states.menuOpen});
  }

  return (
    <Container>
      <ion-icon 
        onClick={handleMenu}
        name={states.menuOpen?'chevron-back':'menu'}
      ></ion-icon>
    </Container>
  )
}

export default WindowMain;

const Container = styled.section `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 1rem;
  
  background: var(--color-1);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px 0px 0px 25px;

  &>ion-icon {
    font-size: calc( var( --size-icon ) * 0.8 );
    color: var(--color-4);
  }

  &>ion-icon:hover {
    color: var(--color-hover-inner )
  }
`