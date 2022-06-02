import styled from 'styled-components';

function Footer({price, callback, title}){

  return (
    <ContainerFooter>
      <div className="valueFooter">
        <small>R$</small>
        <strong>{price}</strong>
      </div>
      <button onClick={callback}>{title}</button>
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

  border-radius: var(--radius-min);
  background-color: var(--color-white);

  &>.valueFooter {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  &>.valueFooter small {
    //margin-top: -5px;
    margin-right: 2px;
    font-size: calc(var(--font-size) * 0.6);
  }

  &>.valueFooter strong {
    font-size: var(--font-size);
    font-weight: bold;
  }  

  &>button {
    height: 100%;
    padding-inline: 1rem;
    font-size: var(--font-size-option-menu);
    border-radius: var(--radius-min);

    color: var(--color-3);
    background-color: var(--color-1);
  }
`