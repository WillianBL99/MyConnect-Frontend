import styled from 'styled-components';
import Header from '../Header';

function InfoProduct() {

  return (
    <ContainerInfoProduct>
      <Header title='produto clicado' />

    </ContainerInfoProduct>
  );
}

export default InfoProduct;

const ContainerInfoProduct = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
`