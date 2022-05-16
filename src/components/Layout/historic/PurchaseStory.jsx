import styled from 'styled-components';
import Price from '../products/Price';

function PurshaseHistory({buy}) {
  const {date, qtd, total} = buy;

  return (
    <ContainerPurshaseHistory>
      <section>
        <div className="date">
          <ion-icon name="today-outline"></ion-icon>
          <time>{date}</time>
        </div>
        <div className="qtd_products">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <p>{qtd} produtos</p>
        </div>
      </section>
      <Price price={total.toFixed(2)} size='1.8rem' />
    </ContainerPurshaseHistory>
  );
}

export default PurshaseHistory;

const ContainerPurshaseHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 4.5rem;

  padding: 0.3rem;
  margin-bottom: 1rem;
  
  border-radius: var(--radio-min);
  background-color: var(--color-white);
  box-shadow: var(--shadow);

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  &>section {
    display: flex;
    width: 100%;

    time,
    p {
      font-size: 1.1rem;
      color: #656565;
      font-weight: 600;
    }

    div {
      display: flex;
    }

    div>ion-icon {
      color: #000;
      margin-right: 0.2rem;
    }

    div.date {
      margin-right: 0.7rem;
    }
  }
  
`