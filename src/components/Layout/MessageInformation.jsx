import styled from 'styled-components';

function MessageInformation({title, subTitle}){

  return (
    <MessageContainer>
      <h1>
        {title}
        <br />
        {subTitle}
      </h1>
    </MessageContainer>
  )
}

export default MessageInformation;

const MessageContainer = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  &>h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-3);
    text-align: center;
  }
`;
