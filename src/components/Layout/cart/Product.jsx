import Price from '../products/Price';
import styled from 'styled-components';

function Product(props) {
  const { img, title, id, selectingProduct, selected, value } = props;
  return (
    <ProductContainer onClick={() => selectingProduct(id)} border={selected === id} selected={selected} >
      <img src={img} alt="" />
      <div className="info">
        <p>{title}</p>
        <Price price={value} size="2.1rem" />
      </div>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.article`   
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0.5rem;
  padding-right: 1rem;

  overflow: hidden;
  
  border-radius: 8px;
  background-color: var(--color-white);

  &>img {
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    
    width: 8rem;
    min-width: 8rem;
    height: 100%;
    margin-right: 5px;
    border-radius: var(--radio-min);
  }

  &>div.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    height: 100%;
    width: 100%;

    p {
      text-align: end;
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-input);
      line-height: 17px;
      color: var(--color-text-dark-blue);
    }
  }
`;