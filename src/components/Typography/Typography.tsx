import { ReactNode } from "react"
import styled, { css } from "styled-components"

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "span"

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: Variant
  children?: ReactNode
  color?: string
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
}

export const Typography = ({
  variant,
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  ...props
}: TypographyProps) => {
  return (
    <TypographyStyled variant={variant} color={color} {...props}>
      {children}
    </TypographyStyled>
  )
}

const TypographyStyled = styled.p<TypographyProps>`
  ${({ theme, color, fontFamily, fontWeight, fontSize, variant }) => css`
    align-items: center;
    color: ${color ? color : theme.colors.base.subtitle};
    display: flex;
    font-family: ${fontFamily ? fontFamily : `"Roboto"`};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;

    ${variant === "h1" && {
      fontFamily: fontFamily ? fontFamily : `"Baloo 2"`,
      fontSize: fontSize ? fontSize : "24px",
      fontWeight: fontWeight ? fontWeight : 700,
      lineHeight: "28px",
    }}

    ${variant === "h2" && {
      fontFamily: fontFamily ? fontFamily : `"Baloo 2"`,
      fontSize: fontSize ? fontSize : "20px",
      fontWeight: fontWeight ? fontWeight : 700,
      lineHeight: "21px",
    }} 

    ${variant === "h3" && {
      fontSize: fontSize ? fontSize : "18px",
      fontWeight: fontWeight ? fontWeight : 700,
    }}

    ${variant === "h4" && {
      fontSize: fontSize ? fontSize : "14px",
      fontWeight: fontWeight ? fontWeight : 700,
    }}

    ${variant === "h5" && {
      fontSize: fontSize ? fontSize : "14px",
      fontWeight: fontWeight ? fontWeight : 400,
    }}

    ${variant === "span" && {
      fontSize: fontSize ? fontSize : "12px",
      fontWeight: fontWeight ? fontWeight : 400,
    }}
  `}
`
