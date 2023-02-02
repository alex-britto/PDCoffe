import styled from "styled-components"
import { CatalogItem, CoffeeProps } from "../CatalogItem/CatalogItem"

interface CatalogListProps extends React.HTMLAttributes<HTMLDivElement> {
  list: CoffeeProps[]
  minQuantity?: number
  maxQuantity?: number
  onAddToCart: (coffee: CoffeeProps, quantity: number) => void
}

export const CatalogList = ({
  list,
  onAddToCart,
  minQuantity,
  maxQuantity,
  ...props
}: CatalogListProps) => {
  return (
    <CoffeesContainer {...props}>
      {list.map((coffee) => (
        <CatalogItem
          key={coffee.id}
          coffee={coffee}
          onAddToCart={onAddToCart}
          minQuantity={5}
          maxQuantity={10}
        />
      ))}
    </CoffeesContainer>
  )
}

const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  width: 100%;
  max-width: 1180px;
  padding: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`
