import { ShoppingCart, Trash } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import { Button, CartButton, DeleteButton } from "./components";

import { defaultTheme } from "./styles/themes";

function App() {
  function handleDelete() {
    console.log("delete");
  }

  function handleAddToCart() {
    console.log("add to cart");
  }

  function handleClick() {
    console.log("click");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Button label="LABEL" onClick={handleClick} />

        <CartButton onClick={handleAddToCart}>
          <ShoppingCart size={22} />
        </CartButton>

        <DeleteButton label="REMOVER" onClick={handleDelete}>
          <Trash size={22} color={defaultTheme.colors.purple.default} />
        </DeleteButton>

        <CartButton variant="SECONDARY" onClick={handleAddToCart}>
          <ShoppingCart size={22} />
        </CartButton>

        <CartButton variant="SECONDARY" quantity={3} onClick={handleAddToCart}>
          <ShoppingCart size={22} />
        </CartButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.background};
  padding: 30px;
`;
