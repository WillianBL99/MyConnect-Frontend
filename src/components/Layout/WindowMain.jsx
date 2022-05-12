import styled from 'styled-components';
import Header from './Header';

function WindowMain(props){
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}

export default WindowMain;

const Container = styled.section `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: var(--padding-screen-main);
  
  background: var(--color-1);
  box-shadow: 4px 0px 8px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px 0px 0px 25px;
`;