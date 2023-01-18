import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface StatusProps {
    color: string;
    bgColor: string;
    text: string;
    containerProps?: HTMLAttributes<HTMLDivElement>;
}

const Status = ({ color, bgColor, text, containerProps }: StatusProps) => {
    return (
        <Container color={color} bgColor={bgColor} {...containerProps}>
            {text}
        </Container>
    )
}

const Container = styled.div<{ color: string, bgColor: string }>`
    ${({ bgColor, color }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: fit-content;

        gap: 4px;
        padding: 4px 8px;
        border-radius: 100px;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;

        background-color: ${bgColor};
        color: ${color};
    `}
`

export default Status