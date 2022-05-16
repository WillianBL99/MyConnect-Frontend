import styled from 'styled-components';
import Category from "./Category";
import img from '../../../assets/img/img.jpg';
import Product from './Product';
import { getContext } from '../../../hooks/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import {filterCategories, filterTitle} from '../../../utils/filterProducts';

function Store() {
  const {user, url, selectedCategory, searchText, setSearchText} = getContext();
  const [products, setProducts] = useState(null);
  const categories = [];

  function getCategories(res){
    return res.filter(({ category }) => {
      if(!categories.includes( category.title )){
        categories.push( category.title );
        return true;
      }
      return false;
    })
  }


  function assembleCategories(){
    
    return (
      <div className="categories">
        <Category describe='Todos' ion_icon='cube-outline' />        
        {
          verifyObject(products) ? getCategories(products).map(product => {
              const {title, ion_icon} = product.category;
              return <Category key={title} describe={title} ion_icon={ion_icon} />
          }) : <></>
        }
      </div>
    );
  }

  function filterProducts(){
    return filterTitle( 
      filterCategories(products, selectedCategory), 
      searchText 
    );
  }


  function assembleProducts(){
    return (
      <div className="products">
        {
          verifyObject(products) ? filterProducts().map(product => 
          <Product key={product._id} props={product} />) : <></>
        }
        <div className='sp'></div>
      </div>
    );
  }


  function verifyObject(obj){
    return typeof(products) === 'object' && products !== null;
  }

  
  useEffect(() => {
    const promise = axios.get(`${url}/products`, user.config);
    promise.then(res => {
      setProducts(res.data);
    });
    promise.catch(e => console.error(e));
  }, [user, url])

  return (
    <ContainerStore>
      <Header />
      <article className='promotions'>
        <img src={img} alt="" />
      </article>
      {assembleCategories()}
      {assembleProducts()}
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
    justify-content: start ;
    align-items: start;

    width: 100%;
    height: 80%;

    overflow-y: auto;

    background-color: var(--color-white);
    border-radius: 15px;

    box-shadow: 0px -4px 10px -2px rgba(0, 0, 0, 0.25);
  }

  &>div.products .sp {
    width: 100%;
    height: 50%;
  }
`