import styled from 'styled-components';

function OptionMenu(){

  return (
    <Option>
      <div className="icon"><ion-icon name="storefront-sharp"></ion-icon></div>
      <p>Loja</p>
    </Option>
  );
}

export default OptionMenu;

const Option = styled.div`
  

  ion-icon {
    font-size: var(--size-icon);
    
    filter: drop-shadow( var( --shadow ));
    color: var(--color-1);
  }

  ion-icon {
    font-size: calc(var(--size-icon) * 0.62);
  }
`