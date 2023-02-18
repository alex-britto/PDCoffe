import { useContext } from "react";
import { CoffeeContextProps } from "../../@types/coffee";
import { Header, Menu } from "../../components";
import { CoffeeContext } from "../../contexts";
import { Container } from "./styles";

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
