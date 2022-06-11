import styled from 'styled-components';
import { ThreeDots} from 'react-loader-spinner';

function LoadingScreen({loading}) {
  return (
    <ContainerLoadingScreen loading={loading} >
      <ThreeDots color='var(--color-4)' height='100%'/>
    </ContainerLoadingScreen>
  );
}

export default LoadingScreen;

const ContainerLoadingScreen = styled.article`
  --display: ${(props) => props.loading?'flex':'none'};
  display: var(--display);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  background: rgba(0, 0, 0, 0.70);
`;
