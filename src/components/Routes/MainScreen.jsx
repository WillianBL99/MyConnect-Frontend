import styled from "styled-components";
import Container from "../Layout/Container";
import SideBar from "../Layout/SideBar";
import WindowMain from "../Layout/WindowMain";
import { getContext } from "../../hooks/UserContext";

function MainScreen() {
  const { cartState } = getContext();

  return (
    <ContainerExtended>
      <SideBar />
      <WindowMain
        width={"100%"}
        position={"initial"}
        right={"0"}
        zIndex={"0"}
      />
      <ContainerCart
        width={"var(--sub-menus-width)"}
        position={"absolute"}
        right={cartState ? "0" : "-100%"}
        zIndex={"1"}
      >
        <h1>carrinho</h1>
      </ContainerCart>
    </ContainerExtended>
  );
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: var(--color-2);
`;
const ContainerCart = styled(WindowMain)``;
