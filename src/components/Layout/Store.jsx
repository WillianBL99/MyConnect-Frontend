import styled from 'styled-components';
import Category from "./Category";
import img from '../../assets/img/img.jpg';
import Product from './Product';

function Store() {
  return (
    <ContainerStore>
      <article className='promotions'>
        <img src={img} alt="" />
      </article>
      <div className="categories">
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
      </div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </ContainerStore>
  );
}

export default Store;

const ContainerStore = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  overflow: hidden;

  &>article.promotions {
    width: 100%;
    height: 6.5rem;

    padding-inline: calc(var(--padding-window) * 0.5);
  }

  &>article.promotions img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    border-radius: var(--radio-min);    
  }

  &>div.categories {
    display: flex;
    width: 100%;
    min-height: 5.8rem;

    padding: calc(var(--padding-window) * 0.5);
    margin-block: calc(var(--padding-window) * 0.5);

    overflow-y: auto;
  }

  &>div.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 80%;

    overflow-y: auto;

    background-color: var(--color-white);
    border-radius: 15px;

    box-shadow: 0px -4px 10px -2px rgba(0, 0, 0, 0.25);;
  }
`