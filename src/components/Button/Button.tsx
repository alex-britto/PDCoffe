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
    <StyledButton
      className="py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      type={type}
      color={color}
      {...props}
    >
      {children}

      {quantity > 0 && color == "light" && (
        <Badge>
          <span>{quantity}</span>
        </Badge>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button<
  Omit<ButtonProps, "color"> & {
    color: "primary" | "secondary" | "base" | "light"
    leftIcon?: string
    childrenElementWidth?: number
    iconSize?: string | number
  }
>`
  ${({ theme }) => css`
    align-items: center;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    width: auto;

    ${variant({
      prop: "color",
      variants: {
        primary: {
          bg: theme.colors.yellow.default,
          color: "white",
          fontSize: "14px",
          fontWeight: 700,
          minHeight: "46px",
          minWidth: "132px",

          "&:hover": {
            bg: theme.colors.yellow.dark,
          },
        },
        secondary: {
          bg: theme.colors.purple.dark,
          color: "white",
          fontSize: "12px",
          fontWeight: 700,
          height: "38px",
          padding: "8px",
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
          padding: "8px",

          "&:hover": {
            bg: theme.colors.base.hover,
          },
        },
        light: {
          bg: theme.colors.yellow.light,
          color: theme.colors.yellow.dark,
          fontSize: "12px",
          fontWeight: 700,
          height: "38px",
          padding: "8px",
          position: "relative",
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
