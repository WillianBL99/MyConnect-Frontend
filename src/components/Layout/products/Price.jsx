import styled from 'styled-components';

function Price({price}) {
  const [integer, dec] = price.toString().split('.');

  return (
    <ContainerPrice>
      <small>R$</small>
      <strong>{integer}</strong>
      <small>,{dec}</small>
    </ContainerPrice>
  )
}

export default Price;

const ContainerPrice = styled.div`
  display: flex;
  align-items: flex-start;

  &>strong {
    font-size: var(--font-size-price);
    font-weight: bold;
    color: var(--color-price);
  }

  &>small {
    margin-top: 0.12rem;
    color: var(--color-price);
  }
`