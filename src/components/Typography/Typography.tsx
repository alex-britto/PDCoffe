import { ReactNode } from "react"
import styled, { css } from "styled-components"

interface TypographyProps {
  children: string
  as?: any
  color?: string
  className?: string
  fontSize?: string
}

//cria interface A
interface HeaderProps {
  family?: "header"
  variant:
    | "h1"
    | "h1Bold"
    | "h2"
    | "h2Bold"
    | "h3"
    | "h3Bold"
    | "h4"
    | "h4Bold"
    | "h5"
    | "h5Bold"
}

//cria interface B
interface TextProps {
  family?: "text"
  variant:
    | "h1"
    | "h1Bold"
    | "h2"
    | "h2Bold"
    | "h3"
    | "h3Bold"
    | "h4"
    | "h4Bold"
    | "h5"
    | "h5Bold"
    | "p"
    | "pBold"
    | "span"
    | "spanBold"
}

//cria type que é igual a InterfaceDefault + A + B
type VariantTypes = TypographyProps & (HeaderProps | TextProps)

// 48 32 20 18 - bold & extrabold
const HEADER_STYLES = {
  h1: {
    fontWeight: "700",
    fontSize: "48px",
  },
  h1Bold: {
    fontWeight: "800",
    fontSize: "48px",
  },
  h2: {
    fontWeight: "700",
    fontSize: "32px",
  },
  h2Bold: {
    fontWeight: "800",
    fontSize: "32px",
  },
  h3: {
    fontWeight: "700",
    fontSize: "24px",
  },
  h3Bold: {
    fontWeight: "800",
    fontSize: "24px",
  },
  h4: {
    fontWeight: "700",
    fontSize: "20px",
  },
  h4Bold: {
    fontWeight: "800",
    fontSize: "20px",
  },
  h5: {
    fontWeight: "700",
    fontSize: "18px",
  },
  h5Bold: {
    fontWeight: "800",
    fontSize: "18px",
  },
}

// 24, 20, 18, 16, 14, 12, 10 - regular & bold
const TEXT_STYLES = {
  h1: {
    fontWeight: "400",
    fontSize: "24px",
  },
  h1Bold: {
    fontWeight: "700",
    fontSize: "24px",
  },
  h2: {
    fontWeight: "400",
    fontSize: "20px",
  },
  h2Bold: {
    fontWeight: "700",
    fontSize: "20px",
  },
  h3: {
    fontWeight: "400",
    fontSize: "18px",
  },
  h3Bold: {
    fontWeight: "700",
    fontSize: "18px",
  },
  h4: {
    fontWeight: "400",
    fontSize: "16px",
  },
  h4Bold: {
    fontWeight: "700",
    fontSize: "16px",
  },
  h5: {
    fontWeight: "400",
    fontSize: "14px",
  },
  h5Bold: {
    fontWeight: "700",
    fontSize: "14px",
  },
  p: {
    fontWeight: "400",
    fontSize: "12px",
  },
  pBold: {
    fontWeight: "700",
    fontSize: "12px",
  },
  span: {
    fontWeight: "400",
    fontSize: "10px",
  },
  spanBold: {
    fontWeight: "700",
    fontSize: "10px",
  },
}

export const Typography = (props: VariantTypes) => {
  const {
    children,
    variant,
    family = "text",
    as,
    color,
    className,
    fontSize,
  } = props

  return (
    <TypographyStyled
      variant={variant}
      family={family}
      as={as ?? variant}
      color={color}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </TypographyStyled>
  )
}

const TypographyStyled = styled.p<VariantTypes>`
  ${({ theme, family, variant, color, fontSize }) => css`
    color: ${color ?? theme.colors.base.text};
    line-height: 130%;

    ${family === "header"
      ? css`
          font-family: "Baloo 2", cursive;
          font-size: ${fontSize ?? HEADER_STYLES[variant].fontSize};
          font-weight: ${HEADER_STYLES[variant].fontWeight};
        `
      : css`
          font-family: Roboto, sans-serif;
          font-size: ${fontSize ?? TEXT_STYLES[variant].fontSize};
          font-weight: ${TEXT_STYLES[variant].fontWeight};
        `};
  `}
`
