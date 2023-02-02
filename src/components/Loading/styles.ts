import styled, { css, keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid ${theme.colors.purple.light};
    border-right: 2px solid ${theme.colors.purple.light};
    border-bottom: 2px solid ${theme.colors.purple.light};
    border-left: 4px solid ${theme.colors.purple.dark};
    background: transparent;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `}
`
