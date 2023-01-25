import styled, { css } from "styled-components"

interface TypographyProps {
  children: string
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"
  family?: "header" | "text"
  color?: string
  className?: string
}

//faz mais sentido usar o nome em caps?
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

const textStyles = {
  h1: {
    fontWeight: "400",
    fontSize: "20px",
  },
  h2: {
    fontWeight: "700",
    fontSize: "18px",
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

export const Typography = ({
  children,
  variant,
  family = "text",
  as,
  color,
}: TypographyProps) => {
  return (
    <Text variant={variant} family={family} as={as ?? variant} color={color}>
      {children}
    </Text>
  )
}

const Text = styled.p<TypographyProps>`
  ${({ theme, family, variant, color }) => css`
    ${family === "header"
      ? css`
          font-family: "Baloo 2", cursive;
          font-size: ${HEADER_STYLES[variant].fontSize};
          font-weight: ${HEADER_STYLES[variant].fontWeight};
        `
      : css`
          font-family: Roboto, sans-serif;
          font-size: ${textStyles[variant].fontSize};
          font-weight: ${textStyles[variant].fontWeight};
        `};
    color: ${color ?? theme.colors.base.text};
  `}
`
