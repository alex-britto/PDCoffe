import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.purple.light};
  color: ${({ theme }) => theme.colors.purple.dark};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 8px;
  width: 100%;
  min-width: 140px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.purple.dark};
  }
`;
