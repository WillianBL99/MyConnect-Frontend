import styled from 'styled-components';
import Container from '../Layout/Container';
import SideBar from '../Layout/SideBar';
import WindowMain from '../Layout/WindowMain';

import img from '../../assets/img/img.jpg';
import Category from '../Layout/Category';

function MainScreen() {
   
  return (
    <ContainerExtended>
      <SideBar />
      <WindowMain >
        <Store />
      </WindowMain>
    </ContainerExtended>
  )
}

export default MainScreen;

const ContainerExtended = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-2);
`


function Store() {
  return (
    <ContainerStore>
      <article className='promotions'>
        <img src={img} alt="" />
      </article>
      <div className="categories">
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
        <Category describe='Monitor' ion_icon='tv-outline' />
      </div>
    </ContainerStore>
  );
}

const ContainerStore = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  &>article.promotions {
    width: 100%;
    height: 8rem;

    padding-inline: calc(var(--padding-window) * 0.5);
  }

  &>article.promotions img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    border-radius: var(--radio-min);    
  }

  &>div.categories {
    display: flex;
    width: 100%;

    padding: calc(var(--padding-window) * 0.5);
    margin-block: calc(var(--padding-window) * 0.5);

    overflow-y: auto;

  }
`