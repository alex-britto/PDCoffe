import styled, { css, useTheme } from "styled-components"
import { CreditCard } from "phosphor-react"
import { HTMLAttributes } from "react"

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  isSelected: boolean
}

export function SelectItem({
  title = "cartão de teste",
  isSelected = false,
  ...rest
}: SelectItemProps) {
  const theme = useTheme()
  return (
    <Container isSelected={isSelected} {...rest}>
      <CreditCard size={16} color={theme.colors.purple.default} />
      {title}
    </Container>
  )
}

const Container = styled.div<{ isSelected: boolean }>`
  ${({ theme: { colors }, isSelected }) => css`
    width: fit-content;
    display: flex;
    gap: 12px;

    border-radius: 6px;
    cursor: pointer;

    background-color: ${colors.base.button};
    color: ${colors.base.text};

    ${isSelected
      ? css`
          background: ${colors.purple.light};
          box-shadow: 0 0 0 1px ${colors.purple.default}; ;
        `
      : css`
          &:hover {
            background-color: ${colors.base.hover};
          }
        `}

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  `}
`
