import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import { widthMenu } from '../../styled/css/width_menu';

function SideBar() {
  const {states, windowsState, setWindowsState} = getContext();

  function setSubMenu(e){
    let windowOpen = !windowsState.windowOpen;
    let window = windowsState.window;

    if(e.target.name === 'storefront') windowOpen = false;
    else if( e.target.name !== window) windowOpen = true; //TODO: Implementar setTimeout para fechar e abrir outra janela

    if (e.target.name === "cart" || e.target.name === "time") {
      window = e.target.name;
      setWindowsState({window, windowOpen});
    } else {
      setWindowsState({...windowsState, windowOpen});
    }   
  }
  
  return (
    <Menu stateMenu={states.menuOpen} widthMenu={widthMenu} >
      <UserInfo name='Joãozinho' email='jõaozinh@ges.com' />        
      <ul>
        <section  onClick={ e => setSubMenu(e) }>
          <OptionMenu title='Loja' ion_icon='storefront' />
          <OptionMenu title='Carrinho' ion_icon='cart' />
          <OptionMenu title='Histórico' ion_icon='time' />
        </section>
        <OptionMenu title='Sair' ion_icon='log-out' />
      </ul>
    </Menu>
  )
}

export default SideBar;

function UserInfo({name, email}){
  return (
    <ContainerUser>
      <ion-icon name="person-circle"></ion-icon>
      <section>
        <h3>{name}</h3>
        <p>{email}</p>
      </section>
    </ContainerUser>
  );
}

function OptionMenu({title, ion_icon}) {
  return (
    <Option>
      <div>
        <ion-icon name={ion_icon}></ion-icon>
      </div>
      <p>{title}</p>
    </Option>
  );
}

const Menu = styled.article`
  --display: ${props => props.stateMenu?'block':'none'};

  --size-menu: ${props => props.widthMenu};

  display: flex;
  flex-direction: column;
  align-items: start;
  
  width: var(--size-menu);
  height: 100%;  
  
  padding: var(--padding-menu);

  background-color: var(--color-2);


  p,h3 {
    display: var(--display);
  } 

  &>ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: calc(100% - var(--size-icon));
  }

  &>ul>section {
    height: 100%;
  }
`;

const Option = styled.div`

  display: flex;
  align-items: center;
  width: 100%;

  margin-block: calc(var(--size-icon) * 0.15);
  padding-block: 5px;

  border-radius: 10px;

  &:hover {
    background-color: var( --color-1 );
    box-shadow: var( --shadow );
  }

  &>div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--size-icon);
  }

  & ion-icon {
    font-size: calc(var(--size-icon) * 0.62);
    color: var(--color-1);
  }

  &:hover ion-icon {
    color: var( --color-hover-inner );
  }

  &>p {
    font-size: var(--font-size-option-menu);
    font-family: var(--font-main);
    font-weight: 600;
    color: var(--color-1);
    
    text-shadow: var( --shadow );
  }

  &:hover p{
    color: var( --color-hover-inner );
  }
`;

const ContainerUser = styled.article`
    
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  &>ion-icon {
    font-size: var(--size-icon);
    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--color-1);
  } 

  &>section {
    font-family: var(--font-main);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  & p {
    color: var(--color-1);    
    font-size: 0.9rem;
    font-weight: 600;
    margin-left: 0.13rem;
  }

  & h3 {
    color: var(--color-1);    
    font-size: 1.4rem;
    font-weight: 700;
  }
`;