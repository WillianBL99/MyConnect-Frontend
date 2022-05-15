import styled from 'styled-components';
import Header from '../Header';
import PurshaseHistory from './PurchaseStory';

function Historic() {

  return (
    <ContainerHistoric>
      <Header title={'Meu carrinho'} ion_icon={'trash-outline'} />
      <section>
        <PurshaseHistory date='22/22/22' qtd='5' total={234.23} />
      </section>
    </ContainerHistoric>
  );
}

export default Historic;

const ContainerHistoric = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  overflow: hidden;

  background-color: var(--color-white);

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: start;

    position: absolute;
    top: calc(100vh * 0.15);
    bottom: 0;
    right: 0;
    left: 0;

    padding: 1rem;

    border-radius: 15px;
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-1);
  }
`