import styled from 'styled-components';

function SideBar({open}) {
  
  return (
    <Menu open={open}>
      <div className="user">
        <ion-icon name="person-circle-sharp"></ion-icon>
        <div className="info">
          <h3>Joãozinho</h3>
          <p>joao@joao.com</p>
        </div>
      </div>
        
      <div className="menu_options">
        <section>
          <div className="option" >
            <div className="icon"><ion-icon name="storefront-sharp"></ion-icon></div>
            <p>Loja</p>
          </div>
          <div className="option" >
            <div className="icon"><ion-icon name="cart-sharp"></ion-icon></div>
            <p>Loja</p>
          </div>
          <div className="option" >
            <div className="icon"><ion-icon name="time-sharp"></ion-icon></div>
            <p>Loja</p>
          </div>
        </section>
        <div className="option" >
          <div className="icon"><ion-icon name="log-out-sharp"></ion-icon></div>
          <p>Loja</p>
        </div>
      </div>
    </Menu>
  )
}

export default SideBar;

const Menu = styled.article`

  --fontsize: 1.5rem;
  --padding-menu: 15px;
  --size-icon: 3.2rem;
  //--largura-menu: calc(var(--size-icon) + 30px);
  //--largura-menu: calc(var(--size-icon) + calc(12 * var(--fontsize)));
  --largura-menu: ${props => props.open
    ?'calc(var(--size-icon) + calc(12 * var(--fontsize)))'
    :'calc(var(--size-icon) + 30px)'
  };

  p,h3 {
    display: ${props => props.open?'bock':'none'};
  }


  display: flex;
  flex-direction: column;
  align-items: start;
  
  width: var(--largura-menu);
  height: 100%;  
  
  padding: var(--padding-menu);

  background-color: var(--color-2);

  // user  
  >div.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .user.info{
    font-family: var(--font-main);
    font-weight: 400;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .user p {
    color: var(--color-1);    
    font-size: 0.9rem;
  }

  .user h3 {
    color: var(--color-1);    
    font-size: 1.4rem;
  }

  ion-icon {
    font-size: var(--size-icon);
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--color-1);
  }

  // icones
  div.menu_options ion-icon {
    font-size: calc(var(--size-icon) * 0.62);
  }
  

  div.menu_options {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: calc(100% - var(--size-icon));
  }

  div.menu_options>section {
    height: 100%;
  }

  div.option {
    display: flex;
    align-items: center;
    width: 100%;

    margin-block: calc(var(--size-icon) * 0.2);
  }

  div.option>p {
    font-size: var(--fontsize);
    font-family: var(--font-main);
    font-weight: 400;
    color: var(--color-1);
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--size-icon);
  }
`