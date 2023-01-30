import { Minus, Plus } from "phosphor-react"
import { HTMLAttributes, InputHTMLAttributes, useEffect, useState } from "react"
import styled, { css, useTheme } from "styled-components"

export interface NumberInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "value" | "onChange"> {
  value: number
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  onChange: (value: number) => void
  min?: number
  max?: number
  maxWidth?: string | number
  minWidth?: string | number
  width?: string | number
}

export const NumberInput = ({
  value,
  onChange,
  min = 1,
  max = 100,
  maxWidth = "100%",
  minWidth = 72,
  width = "min-content",
  inputProps,
  ...props
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<number>(value)

  const handleChangeQuantity = (quantity: number) => {
    const value = Math.max(min, Math.min(max, Number(quantity)))
    setInputValue(value)
  }

  const theme = useTheme()

  useEffect(() => {
    handleChangeQuantity(inputValue)
    onChange(inputValue)
  }, [inputValue])

  return (
    <Container {...props} width={width} maxWidth={maxWidth} minWidth={minWidth}>
      <button
        type="button"
        onClick={() =>
          inputValue <= min ? inputValue : setInputValue(inputValue - 1)
        }
        disabled={inputValue <= min}
      >
        <Minus size={14} color={theme.colors.purple.default} />
      </button>

      <Input
        value={inputValue}
        onChange={({ target }) => setInputValue(+target.value)}
        type="number"
        min={min}
        max={max}
        {...inputProps}
      />

      <button
        type="button"
        onClick={() =>
          max && inputValue >= max ? inputValue : setInputValue(inputValue + 1)
        }
        disabled={max && inputValue >= max ? true : false}
      >
        <Plus color={theme.colors.purple.default} />
      </button>
    </Container>
  )
}

const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.transparent};
    border: none;
    color: ${theme.colors.base.text};
    font-size: 16px;
    margin: 0 2px;
    min-width: min-content;
    text-align: center;
    width: 100%;

    &:focus-visible {
      outline: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  `}
`

const Container = styled.div<{
  width: string | number
  minWidth: string | number
  maxWidth: string | number
}>`
  ${({ theme, width, maxWidth, minWidth }) => css`
    align-items: center;
    background: ${theme.colors.base.button};
    border: 1px solid ${theme.colors.base.button};
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    max-width: ${typeof maxWidth === "number" ? maxWidth + "px" : maxWidth};
    min-width: ${typeof minWidth === "number" ? minWidth + "px" : minWidth};
    padding: 5px 8px;
    width: ${typeof width === "number" ? width + "px" : width};

    button {
      height: 14px;
      width: 14px;

      &:hover {
        & line {
          stroke: ${theme.colors.purple.dark};
        }
      }
    }
  `}
`
