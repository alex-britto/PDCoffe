import styled, { css } from "styled-components"

//cria a InterfaceDefault, sem as props específicas
interface TypographyProps {
  children: string
  as?: any
  color?: string
  className?: string
}

//cria interface A
interface HeaderProps {
  family?: "header"
  variant: "h1" | "h2" | "h3" | "h4" | "h5"
}

//cria interface B
interface TextProps {
  family?: "text"
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"
}

//cria type que é igual a InterfaceDefault + A + B
type VariantTypes = TypographyProps & (HeaderProps | TextProps)

const HEADER_STYLES = {
  h1: {
    fontWeight: "800",
    fontSize: "48px",
  },
  h2: {
    fontWeight: "800",
    fontSize: "32px",
  },
  h3: {
    fontWeight: "800",
    fontSize: "24px",
  },
  h4: {
    fontWeight: "700",
    fontSize: "20px",
  },
  h5: {
    fontWeight: "700",
    fontSize: "18px",
  },
  //não mapeados
  p: {
    fontWeight: "700",
    fontSize: "16px",
  },
  span: {
    fontWeight: "700",
    fontSize: "14px",
  },
}

const TEXT_STYLES = {
  h1: {
    fontWeight: "400",
    fontSize: "20px",
  },
  h2: {
    fontWeight: "700",
    fontSize: "20px",
  },
  h3: {
    fontWeight: "700",
    fontSize: "18px",
  },
  h4: {
    fontWeight: "700",
    fontSize: "16px",
  },
  h5: {
    fontWeight: "700",
    fontSize: "14px",
  },
  p: {
    fontWeight: "400",
    fontSize: "14px",
  },
  span: {
    fontWeight: "700",
    fontSize: "10px",
  },
}

//componente é tipado com type completo e não desestrutura as props
export const TypographyV2 = (props: VariantTypes) => {
  //desestrutura as props aqui, dentro do componente
  const { children, variant, family = "text", as, color, className } = props
  return (
    <Text
      variant={variant}
      family={family}
      as={as ?? variant}
      color={color}
      className={className}
    >
      {children}
    </Text>
  )
}

const Text = styled.p<VariantTypes>`
  ${({ theme, family, variant, color }) => css`
    ${family === "header"
      ? css`
          font-family: "Baloo 2", cursive;
          font-size: ${HEADER_STYLES[variant].fontSize};
          font-weight: ${HEADER_STYLES[variant].fontWeight};
        `
      : css`
          font-family: Roboto, sans-serif;
          font-size: ${TEXT_STYLES[variant].fontSize};
          font-weight: ${TEXT_STYLES[variant].fontWeight};
        `};
    color: ${color ?? theme.colors.base.text};
    line-height: 130%;
  `}
`
