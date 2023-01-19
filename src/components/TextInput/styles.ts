import styled, { css } from "styled-components";

interface ContainerProps {
  maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, maxWidth }) => css`
    background: ${theme.colors.base.input};
    border: 1px solid ${theme.colors.base.button};
    font-family: ${theme.fonts.roboto};
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: ${maxWidth};
    &:focus-within,
    &:focus {
      border-color: ${theme.colors.yellow.dark};
      
      p {
        display: none;
      }
    }

    p {
      font-family: ${theme.fonts.roboto};
      font-weight: 400;
      font-size: 12px;
      color: ${theme.colors.base.label};
      position: absolute;
      right: 12px;
      top: 13px;
      font-style: italic;
    }
  `}
`;


export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.base.input};
    border: none;
    color: ${theme.colors.base.text};
    font-size: 14px;
    padding: 12px;
    padding-right: 63px;
    width: 100%;
    &:focus-visible {
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;



