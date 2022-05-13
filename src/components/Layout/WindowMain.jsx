import styled from 'styled-components';
import Header from './Header';

function WindowMain(props){
  const {position,right,width,zIndex}=props;
  return (
    <Container position={position} right={right} width={width} zIndex={zIndex}>
      <Header />
      {props.children}
    </Container>
  );
}

export default WindowMain;

const Container = styled.section `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${props => props.width};
  position: ${props => props.position};
  right: ${props => props.right};
  z-index: ${props => props.zIndex};
  transition: all 600ms ease-out;

  padding: var(--padding-screen-main);
  
  background: var(--color-1);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px 0px 0px 25px;
`;