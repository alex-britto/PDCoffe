import { ReactNode } from "react"
import styled, { css } from "styled-components"

interface ButtonProps {
  title?: string
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>
}

const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow.default};
    color: ${theme.colors.white};
    border-radius: 6px;
    border: none;
    padding: 12px 8px;
    min-width: 132px;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-stretch: 100;
  `}
`

export default Button
