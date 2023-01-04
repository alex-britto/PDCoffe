import { InputHTMLAttributes, useState } from "react"
import { Minus, Plus } from "phosphor-react"
import styled, { css } from "styled-components"

import { defaultTheme } from "../../styles/themes/defaultTheme"

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: number
    onChange?: (value: any) => void
    min?: number
    max?: number
    width?: string | number
    maxWidth?: string | number
    minWidth?: string | number
}

const NumberInput = ({ 
    value, 
    onChange,
    min = 0,
    max,
    width = "min-content",
    maxWidth = "100%",
    minWidth = 72,
    ...props
 }: NumberInputProps) => {
    const [inputValue, setInputValue] = useState(0)

    const minusCount = () => inputValue <= min ? inputValue : setInputValue(inputValue - 1)
    const plusCount = () => max && inputValue >= max ? inputValue : setInputValue(inputValue + 1)

    const isMinusDisabled = inputValue <= min
    const isPlusDisabled = max && inputValue >= max ? true : false
    
    return (
        <Container {...props} width={width} maxWidth={maxWidth} minWidth={minWidth}>
            <Button 
              type="button"
              onClick={() => minusCount()}
              disabled={isMinusDisabled}
            >
                <Minus size={14} color={isMinusDisabled ? defaultTheme.colors.purple.default : defaultTheme.colors.purple.dark} />
            </Button>

            <Input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(+e.target.value)}
                min={min}
                max={max}
            />
            <Button 
              type="button"
              onClick={() => plusCount()}
              disabled={isPlusDisabled}
            >
                <Plus size={14} color={isPlusDisabled ? defaultTheme.colors.purple.default : defaultTheme.colors.purple.dark} />
            </Button>
        </Container>
    )
 
}

const Container = styled.div<{
     width: string | number,
     maxWidth: string | number,
     minWidth: string | number
     }>`
        ${({ theme, width, maxWidth, minWidth }) => css`
            display: flex;

            align-items: center;
            justify-content: space-between;

            background: ${theme.colors.base.button};
            border: 1px solid ${theme.colors.base.button};
            border-radius: 6px;
            padding: 5px 8px;
            
            width: ${typeof width === "number" ? width + "px" : width};
            max-width: ${typeof maxWidth === "number" ? maxWidth + "px" : maxWidth};
            min-width: ${typeof minWidth === "number" ? minWidth + "px" : minWidth};

        `}
     `

const Button = styled.button`
    width: 14px;
    height: 14px;
  }
`

const Input = styled.input`
    ${({ theme }) => css`
        text-align: center;

        background: ${theme.colors.transparent};
        color: ${theme.colors.base.text};
        border: none;

        font-size: 16px;
        margin: 0 2px;

        width: 100%;
        min-width: 30px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
    `}
`

export default NumberInput