import styled from 'styled-components';

function Product({img, describe, price}) {
  const [integer, dec] = price.split('.');
  return (
    <ContainerProduct>
      <figure>
        <img src={img} alt="" />
      </figure>
      <section>
        <p>{describe}</p>
        <div className="value">
          <small>R$</small>
          <strong>{integer}</strong>
          <small>,{dec}</small>
        </div>
      </section>
    </ContainerProduct>
  );
}

export default Product;

const ContainerProduct = styled.article`
  --color-price: var(--color-3);

  display: flex;
  flex-direction: column;

  width: 8rem;
  height: 12rem;

  margin: 1rem;
  margin-bottom: 2.5rem;

  border-radius: var(--radio-min);
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.3);;
  background-color: var(--color-1);

  &>figure {
    width: 100%;
    min-height:  50%;
  }

  &>figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    border-radius: var(--radio-min);    
  }

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 3px;

  }

  &>section .value {
    display: flex;
    align-items: flex-start;
  }

  &>section .value strong {
    font-size: var(--font-size-price);
    font-weight: bold;

    color: var(--color-price);
  }

  &>section .value small {
    margin-top: 0.12rem;

    color: var(--color-price);
  }
`