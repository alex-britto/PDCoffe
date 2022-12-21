import styled from "styled-components"

interface TestProps {
  title?: string
}

export const Item = ({ title }: TestProps) => {
  return <ItemContainer className="">Meu Item</ItemContainer>
}

const ItemContainer = styled.div`
  color: red;
`
