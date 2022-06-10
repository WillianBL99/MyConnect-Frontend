import styled from 'styled-components';

function FeedbackLabel({ error, text }) {
  return (
    <DivLabel>
      <Label
        color={
          error.length === 0
            ? 'var(--color-transparent)'
            : 'var(--color-error)'
        }
      >
        {text}
      </Label>
    </DivLabel>
  );
}

export default FeedbackLabel;

const Label = styled.label`
  font-size: var(--font-size-label);
  color: ${(props) => props.color};
`;
const DivLabel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  min-height: 15px;
  margin-bottom: 0.2rem;
`;
