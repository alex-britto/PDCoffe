import { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

import { defaultTheme } from "../../styles/themes/defaultTheme"

import { Minus, Plus } from "phosphor-react"

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number
  onIncreaseClick: () => void
  onDecreaseClick: () => void
}

export function NumberInput({
  value,
  onIncreaseClick,
  onDecreaseClick,
  ...rest
}: NumberInputProps) {
  return (
    <Container>
      <Minus
        size={14}
        color={defaultTheme.colors.purple.default}
        onClick={onDecreaseClick}
        cursor="pointer"
      />
      <input type="number" value={value} {...rest} />
      <Plus
        size={14}
        color={defaultTheme.colors.purple.default}
        onClick={onIncreaseClick}
        cursor="pointer"
      />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: fit-content;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    padding: 8px;

    border-radius: 6px;

    background-color: ${colors.base.button};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    input {
      width: 20px;
      text-align: center;
      border: none;
      background-color: transparent;
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
