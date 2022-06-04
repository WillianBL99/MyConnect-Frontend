import styled from 'styled-components';

function UserInfo({ img, name, email }) {
  return (
    <ContainerUserInfo>
      {img
        ? <figure><img src={img} alt="Usuário" /></figure>
        : <ion-icon name="person-circle" />}
      <section>
        <h3>{name}</h3>
        <p>{email}</p>
      </section>
    </ContainerUserInfo>
  );
}

export default UserInfo;

const ContainerUserInfo = styled.article`
    
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  &>ion-icon {
    font-size: var(--size-icon);    
    filter: drop-shadow(var(--text-shadow));
    color: var(--color-2);
  } 

  &>figure {
    width: var(--size-icon);
    height: var(--size-icon);

    margin-right: 4px;

    box-shadow: var(--shadow);
    border-radius: 50%;

    img {
      width: var(--size-icon);
      height: var(--size-icon);

      object-fit: cover;
      background-size: cover;
      background-repeat: no-repeat;
      object-position: center;

      border-radius: 50%;
    }
  }

  &>section {
    font-family: var(--font-main);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
      color: var(--color-3);    
      font-size: 0.9rem;
      font-weight: 600;
      margin-left: 0.13rem;
    }

    h3 {
      color: var(--color-3);    
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;
