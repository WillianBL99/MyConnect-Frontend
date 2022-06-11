import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';
import img from '../../../assets/img/img.jpg';
import img2 from '../../../assets/img/img2.png';

function Carousel() {
  const [promotions, setPromotions] = useState([
    { url: img },
    { url: img2 }
  ]);
  const { user, url } = getContext();

  function assemblePromotions() {
    const list = [];

    for (let i = 0; i < promotions.length; i++) {
      list.push(
        <li key={i}>
          <input type="radio" id={`slide${i}`} name="slide" checked />
          <label htmlFor={`slide${i}`} />
          <img src={promotions[i].url} />
        </li>
      );
    }
    return list;
  }

  /* useEffect(() => {
    axios.get(`${url}/promotions`, user.config)
      .then((res) => {
        setPromotions(res.data);
      })
      .catch((e) => console.error(e.response.data));
  }, []); */

  return (
    <CarouselContainner>
        <ul>
          {assemblePromotions()}
        </ul>
    </CarouselContainner>
  );
}

export default Carousel;

const CarouselContainner = styled.div`
  width: 100%;
  height: 6.5rem;
  border-radius: var(--radius-min);


  &>ul {    
    display: block;
    width: 100%;
    height: 6.5rem;
    margin: auto;
    position: relative;
    
    li {
      width: 100%;
      list-style: none;
      position: absolute;
    }

    img {
      min-width: 100%;
      height: 6.5rem;
      object-fit: cover;
      background-size: cover;
      object-position: center;
      background-repeat: no-repeat;

      border-radius: var(--radius-min); 
      vertical-align: top;
    }

    input {
      display: none;
    };

    label {
      display: block;
      width: 10px;
      height: 10px;
      bottom: 10px;
      border-radius: 50%;

      position: absolute;
      z-index: 10;

      cursor: pointer;
      background-color: var(--text-color-plain);
    }

    li:first-child label {
      left: 45%;
    }

    li:nth-child(2) label {
      left: 55%;
    }  

    img {
      opacity: 0;
      visibility: hidden;
    }

    li input:checked ~ img {
      opacity: 1;
      visibility: visible;
      z-index: 10;
    }
  }
`;
