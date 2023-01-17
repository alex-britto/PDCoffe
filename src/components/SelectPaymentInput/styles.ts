import styled from "styled-components";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};
  text-transform: uppercase;
  padding: 16px;
  gap: 12px;
  width: 180px;
  border: none;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 0.75rem;
  transition: 0.2s;
  cursor: pointer;

  div {
    color: ${({ theme }) => theme.colors.purple.default};
    font-size: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.base.hover};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.colors.purple.light};
    border: 1px solid ${theme.colors.purple.default};
  `}
`;
