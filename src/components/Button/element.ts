import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  padding: 18px 27px;
  display: inline-block;
  background: var(--btn-bg);
  border: 1px solid var(--btn-bdr);
  border-radius: 9px;
  text-decoration: none;
  cursor: pointer;
  color: var(--btn-text-color);
  font-size: 16px;
  outline: none;
  font-family: "Futura PT";
  transition: background-color 0.3s linear;
  &:hover {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-text-color);
  }
`;
