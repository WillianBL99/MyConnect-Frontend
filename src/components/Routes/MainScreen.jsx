import styled from 'styled-components';
import Container from '../Layout/Container';
import SideBar from '../Layout/SideBar';
import WindowMain from '../Layout/WindowMain';

function MainScreen() {
   
  return (
    <ContainerExtended>
      <SideBar />
      <WindowMain >
        <Store />
      </WindowMain>
    </ContainerExtended>
  )
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: var(--color-2);
`


function Store() {
  return (
    <>
      <h1>oi</h1>
    </>
  );
}