import { useState } from 'react';
import styled from 'styled-components';

function InputNumber(props) {
  const [qtd, setQtd] = useState(1);
  const {showNumber, setValue, maxValue, width} = props;

  function increase(){
    if(qtd < maxValue){
      setValue(qtd + 1);
      setQtd(qtd + 1);
    }
  }

  function decrease(){
    if(qtd > 0){
      setValue(qtd - 1);
      setQtd(qtd - 1);
    }
  }

  return (
    <ContainerInputNumber showNumber={showNumber} width={width} >
      {props.children}
      <div className="options">
        <ion-icon onClick={increase} name="add-outline"></ion-icon>
        <p>{qtd}</p>
        <ion-icon onClick={decrease} name="remove-outline"></ion-icon>
      </div>
    </ContainerInputNumber>
  );
}

export default InputNumber;

const ContainerInputNumber = styled.div`

  --display-number: ${porps => porps.showNumber?'block':'none'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  width: ${props => props.width};

  border-radius: var(--radio-min);

  &>.options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    border-radius: var(--radio-min);
    background-color: #C4C4C4;
  }

  &>.options ion-icon {
    font-size: 1.3rem;
  }

  &>.options p {
    display: var(--display-number);
  }
`