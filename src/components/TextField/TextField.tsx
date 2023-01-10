import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: any;
    label?: string;
    endLabel?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    width?: string | number;
    maxWidth?: string | number;
    minWidth?: string | number
}

const TextField = ({ 
    value, 
    label, 
    endLabel, 
    placeholder,
    onChange, 
    width = "auto", 
    maxWidth = "100%", 
    minWidth = 200, 
    ...props 
}: TextFieldProps) => {

    return (
        <Container width={width} maxWidth={maxWidth} minWidth={minWidth} {...props}>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
                {endLabel && <EndLabel>{endLabel}</EndLabel>}
        </Container>
    )

}

const Container = styled.div<{ 
    width?: string | number, 
    maxWidth?: string | number, 
    minWidth?: string | number
}>` 
    ${({ theme, width, maxWidth, minWidth }) => css`
        position: relative;
        overflow: hidden;

        background-color: ${theme.colors.base.input};
        border: 1px solid ${theme.colors.base.button};
        border-radius: 4px;

        width: ${typeof width === "number" ? width + "px" : width};
        max-width: ${typeof maxWidth === "number" ? maxWidth + "px" : maxWidth};
        min-width: ${typeof minWidth === "number" ? minWidth + "px" : minWidth};

        &:focus-within,
           &:focus {
             border-color: ${theme.colors.yellow.dark};
           }
`}

`

const Input = styled.input`
    ${({theme}) => css`
        background-color: ${theme.colors.transparent};
        color: ${theme.colors.base.text};
        border: none;

        width: 100%;

        font-size: 14px;
        padding: 12px 63px 12px 12px;

        &:focus-visible {
            outline: 0;
        }
    `}
`

const EndLabel = styled.p`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    align-items: center;
    overflow: hidden;

    top: 50%;
    right: 0;
    height: auto;

    background-color: ${theme.colors.base.input};
    color: ${theme.colors.base.label};

    font-size: 12px;
    font-style: italic;

    padding-right: 12px;
    transform: translateY(-50%);
  `}
`

export default TextField
