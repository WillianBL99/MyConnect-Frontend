import styled from 'styled-components';
import Price from '../products/Price';

function PurshaseHistory({ buy }) {
  const { date, qtd, total } = buy;

  return (
    <ContainerPurshaseHistory>
      <section>
        <div className="date">
          <ion-icon name="today-outline" />
          <time>{date}</time>
        </div>
        <div className="qtd_products">
          <ion-icon name="bag-handle-outline" />
          <p>
            {`${qtd} produto(s)`}
          </p>
        </div>
      </section>
      <Price price={total.toFixed(2)} size="1.8rem" />
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
  
  border-radius: var(--radius-min);
  background-color: var(--color-3);
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
      color: var(--text-color-plain);
      font-weight: var(--font-weight-small);
    }

    div {
      display: flex;
    }

    div>ion-icon {
      color: var(--text-color-main);
      margin-right: 0.2rem;
    }

    div.date {
      margin-right: 0.7rem;
    }
  }
  
`;
