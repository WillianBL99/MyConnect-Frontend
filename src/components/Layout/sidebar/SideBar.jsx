import { widthMenu } from '../../../styled/css/width_menu';
import { getContext } from '../../../hooks/UserContext';

import styled from 'styled-components';

import UserInfo from './UserInfo';
import OptionMenu from './OptionMenu';

function SideBar() {
  const {user, states} = getContext();
  const {img, name, email} = user;
  
  return (
    <Menu stateMenu={states.menuOpen} widthMenu={widthMenu} >
      <UserInfo img={img} name={name} email={email} />        
      <ul>
        <section>
          <OptionMenu rote='store' title='Loja' ion_icon='storefront' />
          <OptionMenu rote='cart' title='Carrinho' ion_icon='cart' />
          <OptionMenu rote='historic' title='Histórico' ion_icon='time' />
        </section>
        <OptionMenu title='Sair' ion_icon='log-out' />
      </ul>
    </Menu>
  )
}

export default SideBar;

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

  & p,
  & h3 {
    display: var(--display);
  } 

  &>ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: calc(100% - var(--size-icon));

    section {
      height: 100%;
    }
  }
`;


