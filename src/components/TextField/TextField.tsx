import { HTMLAttributes, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    containerProps?: HTMLAttributes<HTMLDivElement>;
    endLabel?: string;
}

const TextField = ({ 
    endLabel, 
    containerProps, 
    value,
    onChange,
    ...rest 
}: TextFieldProps) => {

    return (
        <Container {...containerProps}>
            <input type="text" onChange={onChange} {...rest} />
                <span>{endLabel}</span>
        </Container>
    )

}

const Container = styled.div` 
    ${({ theme }) => css`
        display: flex;

        background-color: ${theme.colors.base.input};
        border: 1px solid ${theme.colors.base.button};

        gap: 4px;
        padding: 12px;
        border-radius: 4px;
        line-height: 130%;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        :focus-within {
            border: 1px solid ${theme.colors.yellow.dark};
            
            span {
                display: none;
            }
        }

        input {
            width: 100%;
            background-color: transparent;
            ::placeholder {
              color: ${theme.colors.base.label};
            }
            &:focus-visible {
              outline: none;
            }
          }

          span {
            width: fit-content;
            white-space: nowrap;
            color: ${theme.colors.base.label};

            font-style: italic;
            font-size: 12px;
          }
        }
`}

`

export default TextField
