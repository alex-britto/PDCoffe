import { ButtonHTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: ReactNode
  variant?: "big" | "small"
  textColor?: string
  bgColor: string
  bgHoverColor?: string
  itemsQuantity?: number
  badgeColor?: string
}

const Button = ({ 
  label, 
  icon, 
  variant = "big", 
  textColor = "white", 
  bgColor, 
  bgHoverColor, 
  itemsQuantity, 
  badgeColor, 
  ...rest 
}: ButtonProps) => {
  return (
    <StyledButton
    label={label}
    variant={variant}
    textColor={textColor}
    bgColor={bgColor}
    bgHoverColor={bgHoverColor}
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

    min-width: ${variant === "big" && label && "132px"};
    padding: ${variant === "big" ? (label ? "12px 8px" : "8px") : "6.5px 8px"};
    
    gap: 4px;
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

    text-transform: uppercase;
  `}
`

const Badge = styled.div<{ badgeColor?: string }>`
    ${({ badgeColor }) => css`
      position: absolute;
    
      display: flex;
      justify-content: center;
      align-items: center;

      bottom: 26px;
      left: 26px;

      width: 20px;
      height: 20px;

      font-family: "Rob
      font-weight: 700;
      font-size: 12px;

      border-radius: 50%;
      
      background-color: ${badgeColor};
      color: white;

      cursor: default;
    `}
`

export default Button
