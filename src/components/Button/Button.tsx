import { ButtonHTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "big" | "small"
  icon?: ReactNode
  label?: string
  bgColor: string
  textColor?: string
  bgHoverColor?: string
  itemsQuantity?: number
  badgeColor?: string
}

export const Button = ({
  variant = "big",
  icon,
  label,
  textColor = "white",
  bgColor,
  bgHoverColor,
  itemsQuantity,
  badgeColor,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      textColor={textColor}
      label={label}
      {...rest}
    >
      {icon}
      {label}
      {!!itemsQuantity && (
        <Badge badgeColor={badgeColor}>{itemsQuantity}</Badge>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonProps>`
  ${({ bgColor, bgHoverColor, textColor, label, variant }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${variant === "big" ? (label ? "12px 8px" : "8px") : "6.5px 8px"};
    gap: 4px;

    min-width: ${variant === "big" && label && "132px"};
    border-radius: 6px;

    background-color: ${bgColor};
    color: ${textColor};

    &:hover {
      background-color: ${bgHoverColor ?? bgColor};
    }

    font-family: "Roboto";
    font-style: normal;
    font-weight: ${variant === "big" ? 700 : 400};
    font-size: ${variant === "big" ? "14px" : "12px"};
    line-height: 160%;
    text-transform: uppercase;
    font-stretch: 100;
  `}
`

const Badge = styled.div<{ badgeColor?: string }>`
  ${({ badgeColor }) => css`
    position: absolute;
    bottom: 26px;
    left: 26px;

    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;

    border-radius: 50%;
    background-color: ${badgeColor};
    color: white;

    cursor: default;
  `}
`
