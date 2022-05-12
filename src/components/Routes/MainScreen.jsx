import { useState } from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import SideBar from '../Layout/SideBar';

function MainScreen() {
  const [open, setOpen] = useState(true);

  function openMenu(){
    setOpen(!open);
  }
   
  return (
    <ContainerExtended>
      <SideBar open={open} />
      <section>
      <ion-icon 
        onClick={openMenu}
        name="menu"
      ></ion-icon>
      </section>
    </ContainerExtended>
  )
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: var(--color-2);
  
  >section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    padding: 1rem;
    
    background: var(--color-1);
    box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
    border-radius: 25px 0px 0px 25px;
  }

  >section>ion-icon {
    font-size: 2rem;
    color: blue;
  }

`