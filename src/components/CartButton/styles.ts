import styled, { css } from "styled-components";

interface ContainerProps {
  variant?: "PRIMARY" | "SECONDARY";
}

export const Container = styled.button<ContainerProps>`
  padding: 8px;
  width: 38px;
  border: none;
  border-radius: 6px;
  transition: 0.2s;

  ${({ variant }) =>
    variant === "PRIMARY" &&
    css`
      background-color: ${({ theme }) => theme.colors.purple.dark};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        transition: 0.2s;
        background-color: ${({ theme }) => theme.colors.purple.default};
      }
    `}

  ${({ variant }) =>
    variant === "SECONDARY" &&
    css`
      background-color: ${({ theme }) => theme.colors.yellow.light};
      color: ${({ theme }) => theme.colors.yellow.dark};
    `}
`;

export const Badge = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -44px;
    right: -24px;
    background-color: ${({ theme }) => theme.colors.yellow.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 4px 9px;
    border-radius: 50%;
  }
`;
