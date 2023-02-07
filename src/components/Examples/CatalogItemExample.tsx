import { CoffeeProps } from "./../CatalogItem/CatalogItem"
import { CatalogList } from "./../CatalogItem"
import { Loading } from "./../Loading"
import styled from "styled-components"

interface CartListProps {
  coffeeList: CoffeeProps[]
  isLoading: boolean
}

export const CatalogListExample = ({
  coffeeList,
  isLoading,
}: CartListProps) => {
  const onAddToCart = (coffee: CoffeeProps) => {
    alert(
      `${coffee.title} adicionado ao carrinho`
    )
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CatalogList
          list={coffeeList}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  )
}

const Container = styled.div`
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

export default CatalogListExample