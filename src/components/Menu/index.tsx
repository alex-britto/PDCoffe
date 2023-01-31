import { HTMLAttributes } from "react";
import { ICartItem, ICoffee } from "../../@types/coffee";
import { CatalogItem } from "../CatalogItem";
import { Spinner } from "../Spinner";
import { Container } from "./styles";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  coffeeList: ICoffee[];
  isLoading: boolean;
  onAddToCart: (coffee: ICartItem) => void;
}

export const Menu = ({ coffeeList, isLoading, onAddToCart }: MenuProps) => {
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        coffeeList.map((coffee) => (
          <CatalogItem
            key={coffee.id}
            coffee={coffee}
            onAddToCart={(coffee: ICartItem) => onAddToCart(coffee)}
          />
        ))
      )}
    </Container>
  );
};
