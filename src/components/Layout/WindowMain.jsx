import styled from 'styled-components';
import { widthMenu } from '../../styled/css/teste';
import Header from './Header';

function WindowMain(props){

  return (
    <ContainerMain widthMenu={widthMenu} >
      {/* =======
        const {position,right,width,zIndex}=props;
        return (
          <Container position={position} right={right} width={width} zIndex={zIndex}>
      >>>>>>> f7abe3537aab5835f6c61d208345e5f7d898cb42 */}
      <Header />
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
  height: 100%;
  width: ${props => props.width};
  position: ${props => props.position};
  right: ${props => props.right};
  z-index: ${props => props.zIndex};
  transition: all 600ms ease-out;

  width: var(--width);
  height: 100%;
  
  background: var(--color-1);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px 0px 0px 25px;
`;