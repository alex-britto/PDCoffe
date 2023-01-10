import { ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import { SelectInput } from "../SelectInput/SelectInput"

interface SelectableCardsProps {
  items: {
    id: string
    title: string
    icon?: ReactNode
  }[]
  selectedDefault?: number | string
  onClick?: (index: string) => void
}

export const SelectableCards = ({
  items,
  selectedDefault,
  onClick,
  ...props
}: SelectableCardsProps) => {
  const [selectedInputId, setSelectedInputId] = useState(selectedDefault)

  const handleOnClick = (index: string) => {
    setSelectedInputId(index)
    !!onClick && onClick(index)
  }

  return (
    <Container {...props}>
      {items.map((item) => (
        <SelectInput
          key={item.id}
          title={item.title}
          icon={item.icon}
          onClick={() => handleOnClick(item.id)}
          selected={selectedInputId === item.id}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 24px;
    justify-content: space-between;
  `}
`
