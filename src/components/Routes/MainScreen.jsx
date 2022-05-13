import styled from 'styled-components';
import Container from '../Layout/Container';
import SideBar from '../Layout/SideBar';
import Store from '../Layout/products/Store';
import Window from '../Layout/Window';
import WindowMain from '../Layout/WindowMain';

function MainScreen() {
   
  return (
    <ContainerExtended>
      <SideBar />
      <WindowMain >
        <Store />
        <Window />
      </WindowMain>
    </ContainerExtended>
  )
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-2);
`