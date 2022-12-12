import { ShoppingCart, Trash } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import { Button, CartButton, DeleteButton } from "./components";

import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Button title="LABEL" />
        <CartButton>
          <ShoppingCart size={22} />
        </CartButton>

        <DeleteButton title="REMOVER">
          <Trash size={22} color={defaultTheme.colors.purple.default} />
        </DeleteButton>

        <CartButton variant="SECONDARY">
          <ShoppingCart size={22} />
        </CartButton>

        <CartButton variant="SECONDARY" isBadge={true}>
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
