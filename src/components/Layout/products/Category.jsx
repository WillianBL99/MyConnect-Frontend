import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';

function Category({describe, ion_icon}) {
  const {setCategory} = getContext();

  return (
    <ContainerCategory onClick={() => setCategory(describe)}>
      <span>
        <ion-icon name={ion_icon}></ion-icon>
      </span>
      <p>{describe}</p>
    </ContainerCategory>
  );
}

export default Category;

const ContainerCategory = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(var(--size-icon) + 0.3rem);

  margin-right: 1.5rem;

  &>span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--size-icon);
    height: var(--size-icon);

    margin-bottom: 0.45rem;

    border-radius: 50%;
    
    box-shadow: var(--shadow);
    background-color: #fff;
  } 

  &:hover span {
    box-shadow: var(--shadow-hover);
  }

  &:hover p {
    font-weight: var(--font-weight-bold);
  }

  &>span ion-icon {
    font-size: 2rem;
  }
`