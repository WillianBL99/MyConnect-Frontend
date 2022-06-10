/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getContext } from '../../../hooks/UserContext';

import setWindow from '../../../utils/setCurrentWindow';

function OptionMenu({ rote, title, ion_icon }) {
  const { setStates, windowsState, setWindowsState } = getContext();
  const navigate = useNavigate();

  function handleOnClick() {
    if (rote === 'log-out') {
      const msg = 'Tem certeza que deseja sair?';

      if (window.confirm(msg)) {
        localStorage.clear();
        navigate('/');
      }
    } else {
      setWindow(setStates, windowsState, setWindowsState, rote);
    }
  }

  return (
    <ContainerOptionMenu onClick={handleOnClick}>
      <div>
        <ion-icon name={ion_icon} />
      </div>
      <p>{title}</p>
    </ContainerOptionMenu>
  );
}

export default OptionMenu;

const ContainerOptionMenu = styled.div`

  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  margin-block: calc(var(--size-icon) * 0.15);
  padding-block: 5px;

  border-radius: var(--radius-min);

  &:hover {
    background-color: var( --color-hover );
    box-shadow: var( --shadow );
  }

  &:hover ion-icon {
    color: var( --color-hover-inner );
  }

  &:hover p{
    color: var( --color-hover-inner );
  }

  &>div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--size-icon);

    ion-icon {
      font-size: calc(var(--size-icon) * 0.62);
      color: var(--color-2);
      filter: drop-shadow(var(--text-shadow));
    }
  }

  &>p {
    font-size: var(--font-size-option-menu);
    font-family: var(--font-main);
    font-weight: 600;
    color: var(--color-2);
    
    text-shadow: var( --text-shadow );
  }
`;
