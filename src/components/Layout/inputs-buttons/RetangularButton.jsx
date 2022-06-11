import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

function RetangularButton({ title, to, loading }) {
  const navigate = useNavigate();

  const innerButton = loading?<ThreeDots color='var(--color-4)' height='100%'/>:title;

  return (
    <Button onClick={() => navigate(to || '')}>{innerButton}</Button>
  );
}

export default RetangularButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: var(--height-button-login);

  border-radius: var(--radius-button-login);

  font-size: var(--font-size-button);

  background-color: var(--color-button);
  color: var(--color-text-white);
`;
