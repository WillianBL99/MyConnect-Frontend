import styled from 'styled-components';

function Category({describe, ion_icon}) {

  return (
    <ContainerCategory>
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

  &>span ion-icon {
    font-size: 2rem;
  }
`