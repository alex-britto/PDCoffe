import { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type Variant = "h1" | "h2" | "h3" | "h4" | "title" | "subtitle" | "body" | "caption" | "subcaption";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>{
    variant: Variant;
    children: ReactNode;
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
}

const Typography = ({ variant, children, color, fontFamily, fontWeight, ...rest }: TypographyProps) => {
    return (
        <TypographyStyled variant={variant} fontFamily={fontFamily} fontWeight={fontWeight} {...rest}>
            {children}
        </TypographyStyled>
    )
}

const TypographyStyled = styled.p<TypographyProps>`
    ${({ theme, color, variant, fontFamily, fontWeight }) => css`
        display: flex;
        align-items: center;

        color: ${color ? color : theme.colors.base.subtitle};

        font-family: "Roboto";
        font-size: 14px;
        font-weight: 400;
        line-height: 130%;

        ${variant === "h1" && {
            fontFamily: "Baloo 2",
            fontSize: "48px",
            fontWeight: 700,
        }}
        ${variant === "h2" && {
            fontFamily: "Baloo 2",
            fontSize: "32px",
            fontWeight: 700,
        }}
        ${variant === "h3" && {
            fontFamily: `${fontFamily ? fontFamily : "Baloo 2"}`,
            fontSize: "20px",
            fontWeight: "700",
        }}
        ${variant === "h4" && {
            fontFamily: `${fontFamily ? fontFamily : "Baloo 2"}`,
            fontSize: "18px",
            fontWeight:"700",
        }}
        ${variant === "title" && {
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: `${fontWeight ? fontWeight : 700}`,
        }}
        ${variant === "subtitle" && {
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: `${fontWeight ? fontWeight : 400}`,
        }}
        ${variant === "body" && {
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: `${fontWeight ? fontWeight : 400}`,
        }}
        ${variant === "caption" && {
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: `${fontWeight ? fontWeight : 400}`,
        }}
        ${variant === "subcaption" && {
            fontFamily: "Roboto",
            fontSize: "10px",
            fontWeight: `${fontWeight ? fontWeight : 400}`,
        }}
    `}
`


export default Typography