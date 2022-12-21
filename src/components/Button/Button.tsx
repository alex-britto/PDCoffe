import { ButtonHTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"
import { variant } from "styled-system"

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

const StyledButton = styled.button`
  ${({ theme }) => css`
    align-items: center;
    border: none;
    border-radius: 6px;
    color: white;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    padding: 8px;
    position: relative;
    text-transform: uppercase;
    width: auto;

    ${variant({
      prop: "color",
      variants: {
        primary: {
          bg: theme.colors.yellow.default,
          minHeight: "46px",
          minWidth: "132px",

          "&:hover": {
            bg: theme.colors.yellow.dark,
          },
        },
        secondary: {
          bg: theme.colors.purple.dark,
          fontSize: "12px",
          height: "38px",
          width: "38px",

          "&:hover": {
            bg: theme.colors.purple.default,
          },
        },
        base: {
          bg: theme.colors.base.button,
          color: theme.colors.base.text,
          fontSize: "12px",
          fontWeight: 400,
          minHeight: "32px",

          "&:hover": {
            bg: theme.colors.base.hover,
          },
        },
        light: {
          bg: theme.colors.yellow.light,
          color: theme.colors.yellow.dark,
          fontSize: "12px",
          height: "38px",
          width: "38px",
        },
      },
    })}
  `}
`

const Badge = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.yellow.dark};
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
