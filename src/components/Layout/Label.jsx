import styled from "styled-components";

function FeedbackLabel({ errorFeedback }) {
  return (
    <DivLabel>
      <Label
        color={
          errorFeedback === "!"
            ? "var(--color-transparent)"
            : "var(--color-text-error)"
        }
      >
        {errorFeedback}
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
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  padding-left: 15px;
  min-height: 45px;
  margin-bottom: 0.6rem;
`;
