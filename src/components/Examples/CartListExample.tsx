import { CoffeeProps } from "../CatalogItem/CatalogItem"
import { CartList } from "../CartList/CartList"

interface CartListProps {
  coffeeList: CoffeeProps[]
}

export const CartListExample = ({ coffeeList }: CartListProps) => {
  return (
    <>
      {coffeeList && (
        <CartList
          list={coffeeList.slice(0, 3)}
          minQuantity={3}
          maxQuantity={10}
        />
      )}
    </>
  )
}
