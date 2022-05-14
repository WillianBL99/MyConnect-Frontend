import styled from 'styled-components';

function Price({price, size}) {
  const [integer, dec] = price.toString().split('.');

  return (
    <ContainerPrice size={size}>
      <small>R$</small>
      <strong>{integer}</strong>
      <small>,{dec}</small>
    </ContainerPrice>
  )
}

export default Price;

const ContainerPrice = styled.div`
  --font-size: ${props => props.size};

  display: flex;
  align-items: flex-start;

  &>strong {
    font-size: var(--font-size);
    font-weight: bold;
    color: var(--color-price);
  }

  &>small {
    margin-top: calc(var(--font-size) * 0.13);
    font-size: calc(var(--font-size) * 0.5);
    color: var(--color-price);
  }
`