import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.base.button};
  font-family: ${({ theme }) => theme.fonts.roboto};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.base.text};
  padding: 8px;
  border: none;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.fonts.roboto};
  }
`;
