import styled, { css } from "styled-components";

// 48 32 20 18 - bold & extrabold
const BALLOO_VARIANTS = {
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
        fontSize: "20px",
    },
    h3Bold: {
        fontWeight: "800",
        fontSize: "20px",
    },
    h4: {
        fontWeight: "700",
        fontSize: "18px",
    },
    h4Bold: {
        fontWeight: "800",
        fontSize: "18px",
    },
}

// 24, 20, 18, 16, 14, 12, 10 - regular & bold
const ROBOTO_VARIANTS = {
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
    caption: {
        fontWeight: "400",
        fontSize: "14px",
    },
    captionBold: {
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

export interface TypographyProps {
    children: string
    as?: any
    fontColor?: string
    className?: string
  }
  
  interface BalooProps {
    family?: "baloo"
    variant: "h1" | "h1Bold" | "h2" | "h2Bold" | "h3" | "h3Bold" | "h4" | "h4Bold" 
  }
  
  interface RobotoProps {
    family?: "roboto"
    variant: "h1" | "h1Bold" | "h2" | "h2Bold" | "h3" | "h3Bold" | "h4" | "h4Bold" | "caption" | "captionBold" | "p" | "pBold" | "span" | "spanBold" 
  }

  type Variant = TypographyProps & (BalooProps | RobotoProps)

const Typography = ({ variant, as, family, children, fontColor, className }: Variant) => {
    return (
        <TypographyStyled variant={variant} as={as ?? variant} family={family} fontColor={fontColor} className={className}>
            {children}
        </TypographyStyled>
    )
}

const TypographyStyled = styled.p<Variant>`
    ${({ theme, fontColor, variant, family }) => css`
        display: flex;
        align-items: center;

        ${family === "baloo"
        ? css`
            font-family: "Baloo 2", cursive;
            font-size: ${BALLOO_VARIANTS[variant].fontSize};
            font-weight: ${BALLOO_VARIANTS[variant].fontWeight};
          `
        : css`
            font-family: Roboto, sans-serif;
            font-size: ${ROBOTO_VARIANTS[variant].fontSize};
            font-weight: ${ROBOTO_VARIANTS[variant].fontWeight};
          `};

        color: ${fontColor ? fontColor : theme.colors.base.subtitle};

        line-height: 130%;
    `}
`


export default Typography