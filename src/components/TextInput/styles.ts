import styled, { css } from "styled-components";

interface InputProps {
  disabled?: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    font-family: "Roboto", sans-serif;
    background: ${theme.colors.base.input};
    width: 100%;
    color: ${theme.colors.base.text};
    font-size: 14px;
    padding: 12px;
    &:focus-visible {
      outline: 0;
    }

    &:disabled {
      opacity: ${({ disabled }: InputProps) => (disabled ? 0.5 : 1)};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.base.input};
    border: 1px solid ${theme.colors.base.button};
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    width: 100%;
    &:focus-within,
    &:focus {
      border-color: ${theme.colors.yellow.dark};
    }
  `}
`;

export const EndLabel = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.base.input};
    display: flex;
    font-style: italic;
    height: auto;
    padding-right: 12px;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    top: 50%;
  `}
`;
