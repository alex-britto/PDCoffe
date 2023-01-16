import { Bank, CreditCard, Money, ShoppingCart, Trash } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import {
  Button,
  CartButton,
  DeleteButton,
  SelectPaymentInput,
  SelectQuantityInput,
  TextInput,
} from "./components";

import { useState } from "react";
import { defaultTheme } from "./styles/themes";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [isDebitSelected, setDebitIsSelected] = useState(false);
  const [isCreditSelected, setIsCreditSelected] = useState(false);
  const [isMoneySelected, setIsMoneySelected] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  function handleDelete() {
    console.log("Remover pedido");
  }

  function handleAddToCart() {
    console.log("Adicionar ao carrinho");
  }

  function handleClick() {
    console.log("Confirmar pedido");
  }

  console.log("Texto do input:", textInputValue);

  console.log("Métodos de pagamento selecionados:", {
    isDebitSelected,
    isCreditSelected,
    isMoneySelected,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Button label="Confirmar pedido" onClick={handleClick} />
        <CartButton
          onClick={handleAddToCart}
          icon={<ShoppingCart size={22} />}
        />

        <DeleteButton
          label="Remover"
          onClick={handleDelete}
          icon={<Trash size={22} color={defaultTheme.colors.purple.default} />}
        />

        <CartButton
          variant="SECONDARY"
          onClick={handleAddToCart}
          icon={<ShoppingCart size={22} />}
        />

        <CartButton
          variant="SECONDARY"
          quantity={3}
          onClick={handleAddToCart}
          icon={<ShoppingCart size={22} />}
        />
      </Container>

      <Container>
        <TextInput
          placeholder="Label"
          endLabel="Opcional"
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </Container>

      <Container>
        <SelectQuantityInput
          value={quantity}
          onChange={(e) => setQuantity(e)}
        />
        <SelectPaymentInput
          id="credit"
          label="Cartão de crédito"
          icon={<CreditCard />}
          onChange={setIsCreditSelected}
        />
        <SelectPaymentInput
          id="debit"
          label="Cartão de débito"
          icon={<Bank />}
          onChange={setDebitIsSelected}
        />
        <SelectPaymentInput
          id="money"
          label="Dinheiro"
          icon={<Money />}
          onChange={setIsMoneySelected}
        />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.background};
  padding: 30px;
`;

export default App;
