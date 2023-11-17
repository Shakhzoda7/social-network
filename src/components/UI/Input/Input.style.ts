import { styled } from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
