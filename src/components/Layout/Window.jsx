import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import { widthMenu } from '../../styled/css/width_menu';
import WindowRoutes from './WindowRoutes';

function Window() {
  const { windowsState } = getContext();

  return (
    <ContainerWindow windowsState={windowsState.windowOpen} widthMenu={widthMenu}>
      <WindowRoutes />
    </ContainerWindow>
  );
}

export default Window;

const ContainerWindow = styled.section`
  --width-window: calc(100vw - ${(props) => props.widthMenu});
  --right: ${(props) => (props.windowsState ? '0' : 'calc(0px - var(--width-window))')}; 

  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--width-window);
  height: 100%;
  
  position: absolute;
  z-index: 10;
  right: var(--right);
  bottom: 0;
  
  transition: all 400ms ease;

  border-top-left-radius: var(--radius-main);
  border-bottom-left-radius: (--radius-main);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  background: var(--color-1);
`;
