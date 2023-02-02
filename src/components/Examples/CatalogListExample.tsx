import { CoffeeProps } from "../CatalogItem/CatalogItem"
import { CatalogList } from "../CatalogList/CatalogList"
import { Loading } from "../Loading/Loading"

interface CartListProps {
  coffeeList: CoffeeProps[]
  isLoading: boolean
}

export const CatalogListExample = ({
  coffeeList,
  isLoading,
}: CartListProps) => {
  function handleAddToCart(coffee: CoffeeProps, quantity: number) {
    alert(
      `Produto ${coffee.title} adicionado ao carrinho \nQuantidade: ${quantity}`
    )
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CatalogList
          list={coffeeList}
          onAddToCart={handleAddToCart}
          minQuantity={5}
          maxQuantity={10}
        />
      )}
    </>
  )
}
