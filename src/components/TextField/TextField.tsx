import { HTMLAttributes, InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  extraMessage?: string
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export function TextField({
  extraMessage,
  containerProps,
  ...rest
}: TextFieldProps) {
  return (
    <Container {...containerProps}>
      <input type="text" {...rest} />
      {!!extraMessage && <span>{extraMessage}</span>}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    gap: 4px;
    padding: 12px;

    background: ${colors.base.input};

    border: 1px solid ${colors.base.button};
    border-radius: 4px;

    color: ${colors.base.text};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    :focus-within {
      border: 1px solid ${colors.yellow.dark};
    }

    input {
      width: 100%;
      background-color: transparent;
      ::placeholder {
        color: ${colors.base.label};
      }
      &:focus-visible {
        outline: none;
      }
    }

    span {
      color: ${colors.base.label};
      font-style: italic;
    }
  `}
`
