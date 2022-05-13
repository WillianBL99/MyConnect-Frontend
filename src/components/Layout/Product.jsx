import styled from 'styled-components';
import img from '../../assets/img/img.jpg';

function Product() {
  return (
    <ContainerProduct>
      <section>
        <img src={img} alt="" />
      </section>
      <p>Redragon Mouse M908</p>

    </ContainerProduct>
  );
}

export default Product;

const ContainerProduct = styled.article`
  display: flex;
  flex-direction: column;

  width: 8rem;
  height: 10rem;

  margin: 1rem;
  margin-bottom: 2.5rem;

  border-radius: var(--radio-min);
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.3);;
  background-color: var(--color-1);

  &>section {
    width: 100%;
    height: 60%;
  }

  &>section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    border-radius: var(--radio-min);    
  }
`