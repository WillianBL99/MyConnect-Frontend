import styled from 'styled-components';
import Category from "./Category";
import img from '../../assets/img/img.jpg';
import Product from './Product';
import { getContext } from '../../hooks/UserContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Store() {
  const {user, url} = getContext();
  const [products, setProducts] = useState();
  const categories = [];

  function filterCategories(res){
    return res.filter(({category}) => {
      console.log('filterC', category, categories)
      if(!categories.includes(category.title)){
        categories.push(category.title);
        return true;
      }
      return false;
    })
  }

  function assembleCategories(){
    return (
      <div className="categories">{
        typeof(products) === 'object'
          ?filterCategories(products).map(product => {
            const {title, ion_icon} = product.category;
            return <Category describe={title} ion_icon={ion_icon} />
          })
          :<></>
      }</div>
    );
  }

  useEffect(() => {
    const promise = axios.get(`${url}/products`, user.config);
    promise.then(res => {
      setProducts(res.data);
    });
    promise.catch(e => console.error(e));
  }, [])

  return (
    <ContainerStore>
      <article className='promotions'>
        <img src={img} alt="" />
      </article>
      {assembleCategories()}
      <div className="products">
        <Product img={img} describe='Mouse super sinistro' price='203.34' />
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
    justify-content: center ;

    width: 100%;
    height: 80%;

    overflow-y: auto;

    background-color: var(--color-white);
    border-radius: 15px;

    box-shadow: 0px -4px 10px -2px rgba(0, 0, 0, 0.25);;
  }
`