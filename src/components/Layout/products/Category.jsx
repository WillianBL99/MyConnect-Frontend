import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';

function Category({ describe, ion_icon }) {
  const { setSelectedCategory, setSearchText } = getContext();

  return (
    <ContainerCategory onClick={() => {
      setSearchText('');
      setSelectedCategory(describe);
    }}
    >
      <span>
        <ion-icon name={ion_icon} />
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
  cursor: pointer;

  &>span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--size-icon);
    min-height: var(--size-icon);

    margin-bottom: 0.45rem;

    border-radius: 50%;
    
    box-shadow: var(--shadow);
    background-color: var(--color-1);
  } 

  &:hover span {
    box-shadow: var(--shadow-hover);
  }

  & p{
    color: var(--text-color-main);
    font-weight: var(--font-weight-normal);
  }

  &:hover p {
    color: var(--text-color-plain);
    font-weight: var(--font-weight-normal);
  }

  &>span ion-icon {
    font-size: 2rem;
    color: #000;
  }
`;
