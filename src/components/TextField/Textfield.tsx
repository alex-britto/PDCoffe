import { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  endLabel?: string
  maxWidth?: string | number
  minWidth?: string | number
  placeholder?: string
  width?: string | number
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const TextField = ({
  value,
  onChange,
  endLabel,
  placeholder,
  maxWidth = "100%",
  minWidth = 200,
  width = "auto",
  inputProps,
  ...props
}: TextFieldProps) => {
  return (
    <Container {...props} width={width} maxWidth={maxWidth} minWidth={minWidth}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />

      {endLabel && value?.length === 0 && <EndLabel>{endLabel}</EndLabel>}
    </Container>
  )
}

const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.transparent};
    border: none;
    color: ${theme.colors.base.text};
    font-size: 14px;
    padding: 12px;
    padding-right: 63px;
    width: 100%;

    &:focus-visible {
      outline: 0;
    }
  `}
`

const Container = styled.div<{
  width: string | number
  minWidth: string | number
  maxWidth: string | number
}>`
  ${({ theme, width, maxWidth, minWidth }) => css`
    background: ${theme.colors.base.input};
    border: 1px solid ${theme.colors.base.button};
    border-radius: 4px;
    max-width: ${typeof maxWidth === "number" ? maxWidth + "px" : maxWidth};
    min-width: ${typeof minWidth === "number" ? minWidth + "px" : minWidth};
    overflow: hidden;
    position: relative;
    width: ${typeof width === "number" ? width + "px" : width};

    &:focus-within,
    &:focus {
      border-color: ${theme.colors.yellow.dark};

      ${EndLabel} {
        display: none;
      }

      ${Input} {
        padding-right: 12px;
      }
    }
  `}
`

const EndLabel = styled.p`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.base.input};
    color: ${theme.colors.base.label};
    display: flex;
    font-size: 12px;
    font-style: italic;
    height: auto;
    padding-right: 12px;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    top: 50%;
  `}
`
