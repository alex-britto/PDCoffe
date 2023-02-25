import { Header, Menu } from "../../components";

import { CoffeeContext } from "../../contexts";
import { CoffeeContextProps } from "../../@types/coffee";
import { Container } from "./styles";
import { useContext } from "react";

export function Home() {
  // CONTEXT
  const { coffeeList, cartItems, isLoading, handleAddToCart } = useContext(
    CoffeeContext
  ) as CoffeeContextProps;

  return (
    <Container>
      <Header cartItems={cartItems} />
      <Menu
        coffeeList={coffeeList}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />
    </Container>
  );
}
