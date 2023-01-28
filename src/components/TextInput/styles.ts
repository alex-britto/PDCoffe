import styled, { css } from "styled-components";

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
