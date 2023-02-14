import { useContext } from "react";
import { Header, Menu } from "../../components";
import { CoffeeContext } from "../../contexts";
import { Container } from "./styles";

export function Home() {
  const { coffeeList, cartItems, isLoading, handleAddToCart } =
    useContext(CoffeeContext);

  return (
    <Container>
      <Header cartItems={cartItems} />
      <Menu
        coffeeList={coffeeList}
        isLoading={isLoading}
        onAddToCart={handleAddToCart!}
      />
    </Container>
  );
}
