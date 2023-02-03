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
  padding: 0 16px;
  width: 100%;
  min-width: 200px;
  max-width: 300px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.purple.dark};
  }
`;
