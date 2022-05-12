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
    <ContainerStore>
      <h1>oi</h1>
    </ContainerStore>
  );
}

const ContainerStore = styled.section`
  width: 100%;
  height: 100%;

  background-color: blue;
`