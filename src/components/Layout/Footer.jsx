import styled from 'styled-components';

function Footer({price}){

  return (
    <ContainerFooter>
      <div className="value">
        <small>R$</small>
        <strong>{price}</strong>
      </div>
      <button>comprar</button>
    </ContainerFooter>
  );
}

export default Footer;

const ContainerFooter = styled.footer`
  --font-size: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;

  height: 4.3rem;
  padding: 1rem;

  border-radius: 15px;
  background-color: var(--color-white);

  &>.value {
    display: flex;
    align-items: start;
    justify-content: start;
  }

  &>.value small {
    margin-top: -5px;
    margin-right: 2px;
    font-size: calc(var(--font-size) * 0.6);
  }

  &>.value strong {
    font-size: var(--font-size);
    font-weight: bold;
  }  

  &>button {
    height: 100%;
    padding-inline: 1rem;
    font-size: var(--font-size-option-menu);
    border-radius: var(--radio-min);

    color: var(--color-3);
    background-color: var(--color-1);
  }
`