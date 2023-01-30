import { ICartItem, ICoffee } from "../../@types/coffee";
import { CatalogItem } from "../CatalogItem";
import { Spinner } from "../Spinner";
import { Container } from "./styles";

interface MenuProps {
  coffeeList: ICoffee[];
  isLoading: boolean;
  handleAddToCart: (coffee: ICartItem) => void;
}

export const Menu = ({ coffeeList, isLoading, handleAddToCart }: MenuProps) => {
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        coffeeList.map((coffee) => (
          <CatalogItem
            key={coffee.id}
            coffee={coffee}
            onAddToCart={(coffee: ICartItem) => handleAddToCart(coffee)}
          />
        ))
      )}
    </Container>
  );
};
