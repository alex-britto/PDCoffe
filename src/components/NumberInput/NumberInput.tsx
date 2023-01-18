import {Minus, Plus} from 'phosphor-react'
import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/themes/defaultTheme';

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: number;
    onAddition: () => void;
    onSubtraction: () => void;
}

const NumberInput = ({ 
    value = 0, 
    onAddition, 
    onSubtraction, 
    ...rest 
}: NumberInputProps ) => {

    return (
        <Container {...rest}>
            <button
                type="button"
                onClick={onSubtraction}
                disabled={value <= 0}
            >
                <Minus 
                size={14} 
                color={defaultTheme.colors.purple.dark}
                />
            </button>
                <input type="number" value={value} {...rest} />
                <button
                type="button"
                onClick={onAddition}
                disabled={value >= 99}
            >
                <Plus 
                size={14} 
                color={defaultTheme.colors.purple.dark}
                cursor="pointer" 
                />
                </button>
        </Container>
    )
}

const Container = styled.div`
       ${({ theme }) => css`
           display: flex;
           align-items: center;
           justify-content: space-between;
           background: ${theme.colors.base.button};
           border: 1px solid ${theme.colors.base.button};
           border-radius: 6px;
           padding: 5px 8px;
           
           width: fit-content;
           height: 32px;

           font-family: "Roboto";
           font-style: normal;
           font-weight: 400;
           font-size: 16px;

           input {
            width: 20px;

            text-align: center;

            border: none;
            background-color: ${theme.colors.transparent};
          }

          input:focus-visible {
            outline: none;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          Firefox input[type="number"] {
            -moz-appearance: textfield;
          }
       `}
    `

    export default NumberInput