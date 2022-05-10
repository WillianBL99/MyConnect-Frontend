import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function RetangularButton({title, to}){
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(to?to:'')} >{title}</Button>
    );
}

export default RetangularButton;

const Button = styled.button`
    width: 100%;
    height: 3rem;

    border-radius: var(--radio-button);

    font-size: var(--font-size-button);

    background-color: var(--color-button);
    color: var(--color-text-white)
`
