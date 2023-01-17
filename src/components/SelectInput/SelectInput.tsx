import { ReactNode, useState } from "react"
import styled, { css } from "styled-components"

interface SelectInputProps {
  title: string
  icon?: ReactNode
  selected?: boolean
  onClick?: () => void
}

export const SelectInput = ({
  title,
  icon,
  selected = false,
  onClick,
  ...props
}: SelectInputProps) => {
  return (
    <Container {...props} selected={selected} onClick={onClick}>
      {!!icon && <span className="mr-3">{icon}</span>}
      <p>{title}</p>
    </Container>
  )
}

const Container = styled.div<{
  selected?: boolean
}>`
  ${({ theme, selected }) => css`
    align-items: center;
    background: ${selected
      ? theme.colors.purple.light
      : theme.colors.base.button};
    border: 1px solid;
    border-color: ${selected ? theme.colors.purple.default : "transparent"};
    border-radius: 6px;
    color: ${theme.colors.base.subtitle};
    cursor: pointer;
    display: flex;
    font-size: 12px;
    justify-content: flex-start;
    overflow: hidden;
    padding: 16px 20px;
    position: relative;
    text-transform: uppercase;
    width: auto;

    &:hover {
      background: ${!selected && theme.colors.base.hover};
    }
  `}
`
