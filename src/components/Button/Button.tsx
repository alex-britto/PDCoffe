import { ButtonHTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/themes/defaultTheme"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color?: "primary" | "secondary" | "base" | "light"
  type?: "button" | "submit" | "reset"
  quantity?: number
}

export const Button = ({
  children,
  color = "primary",
  type = "button",
  quantity = 0,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type={type} color={color} {...props}>
      {children}

      {quantity > 0 && (
        <Badge>
          <span>{quantity}</span>
        </Badge>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button<{
  color?: string
}>`
  ${({ color }) => css`
    align-items: center;
    background-color: ${defaultTheme.colors.base.button};
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    padding: 8px;
    position: relative;
    text-transform: uppercase;
    width: auto;

    ${color === "primary" && {
      backgroundColor: defaultTheme.colors.yellow.default,
      minHeight: "46px",
      minWidth: "132px",

      "&:hover": {
        backgroundColor: defaultTheme.colors.yellow.dark,
      },
    }}
    ${color === "secondary" && {
      backgroundColor: defaultTheme.colors.purple.dark,
      fontSize: "12px",
      height: "38px",
      width: "38px",

      "&:hover": {
        backgroundColor: defaultTheme.colors.purple.default,
      },
    }}
    ${color === "base" && {
      backgroundColor: defaultTheme.colors.base.button,
      color: defaultTheme.colors.base.text,
      fontSize: "12px",
      fontWeight: 400,
      minHeight: "32px",

      "&:hover": {
        backgroundColor: defaultTheme.colors.base.hover,
      },
    }}
    ${color === "light" && {
      backgroundColor: defaultTheme.colors.yellow.light,
      color: defaultTheme.colors.yellow.dark,
      fontSize: "12px",
      height: "38px",
      width: "38px",
    }}
  `}
`

const Badge = styled.div`
  ${() => css`
    align-items: center;
    background-color: ${defaultTheme.colors.yellow.dark};
    border-radius: 50%;
    color: white;
    display: flex;
    font-weight: bold;
    height: 20px;
    justify-content: center;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 20px;
  `}
`
