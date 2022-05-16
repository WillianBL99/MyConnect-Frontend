import styled from 'styled-components';
import Header from '../Header';
import { getContext } from '../../../hooks/UserContext';
import PurshaseHistory from './PurchaseStory';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Historic() {
  const {user, url} = getContext();
  const [purshase, setPushase] = useState(null);

  function assemblePurshase(){
    if(purshase?.length) {
      return purshase.map((buy, id) => 
        <PurshaseHistory key={id} buy={buy} />
      ); 
    } 
    
    return (
      <div className="null">
        <p>Histórico vasio</p>
      </div>
    );
  }

  useEffect(() => {
    axios.get(`${url}/historic`, user.config)
      .then((res) => {
        setPushase(res.data.reverse());
      })
      .catch(e => console.error('deu ruim', e));

  }, [user, url]);

  return (
    <ContainerHistoric>
      <Header title={'Meu carrinho'} ion_icon={'trash-outline'} icon_visible={false} />
      <section>
        {assemblePurshase()}
      </section>
    </ContainerHistoric>
  );
}

export default Historic;

const ContainerHistoric = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  overflow: hidden;

  background-color: var(--color-white);

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: start;

    position: absolute;
    top: calc(100vh * 0.15);
    bottom: 0;
    right: 0;
    left: 0;

    padding: 1rem;

  overflow-y: auto;

    border-radius: 15px;
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-1);

    div.null {
      display: flex;
      justify-content: center;
      width: 100%;

      font-size: 1.3rem;
    }
  }
`