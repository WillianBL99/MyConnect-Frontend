import styled from 'styled-components';
import { widthMenu } from '../../styled/css/width_menu';

function WindowMain(props){

  return (
    <ContainerMain widthMenu={widthMenu} >
      {props.children}
    </ContainerMain>
  );
}

export default WindowMain;

const ContainerMain = styled.section`
  --width-menu: ${props => props.widthMenu};
  --width: calc(100vw - var(--width-menu));

  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--width);
  height: 100%;

  position: relative;
  
  overflow: hidden;
  
  background: var(--color-1);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  border-top-left-radius: var(--radius-main);
  border-bottom-left-radius: var(--radius-main);
`;