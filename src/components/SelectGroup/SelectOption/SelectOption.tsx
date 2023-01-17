import { CreditCard, Bank, Money } from "phosphor-react"
import styled, { css, useTheme } from "styled-components"

interface SelectOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isSelected: boolean
  icon?: string
  value: string
}

interface SelectButtonProps {
  isSelected: boolean
}

const SelectOption = ({
  label,
  isSelected,
  icon,
  onClick,
}: SelectOptionProps) => {
  const theme = useTheme()

  const icons = {
    credit: <CreditCard size={16} color={theme.colors.purple.default} />,
    debit: <Bank size={16} color={theme.colors.purple.default} />,
    cash: <Money size={16} color={theme.colors.purple.default} />,
  }

  return (
    <SelectButton
      isSelected={isSelected}
      onClick={onClick}
      className="flex gap-3"
    >
      {icon ? icons[icon as keyof typeof icons] : ""}
      {label}
    </SelectButton>
  )
}

export default SelectOption

const SelectButton = styled.button<SelectButtonProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected
      ? theme.colors.purple.light
      : theme.colors.base.button};
    color: ${theme.colors.base.text};
    font-size: 12px;
    border: ${isSelected ? `1px solid ${theme.colors.purple.default}` : "none"};
    border-radius: 6px;
    padding: 16px;
    text-transform: uppercase;
    &:hover {
      background-color: ${theme.colors.base.hover};
    }
  `}
`
