import { Bank, CreditCard, Money, ShoppingCart, Trash } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import {
  Button,
  CardCoffee,
  CartButton,
  DeleteButton,
  SelectPaymentInput,
  Status,
  TextInput,
} from "./components";
import { useState } from "react";
import { defaultTheme } from "./styles/themes";

function App() {
  const [isDebitSelected, setDebitIsSelected] = useState(false);
  const [isCreditSelected, setIsCreditSelected] = useState(false);
  const [isMoneySelected, setIsMoneySelected] = useState(false);

  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  function handleDelete() {}

  function handleAddToCart() {}

  function handleClick() {}

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

      <Container>
        <TextInput
          placeholder="Label"
          optional={true}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextInput
          maxWidth="200px"
          placeholder="Label"
          optional={true}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextInput
          maxWidth="200px"
          placeholder="Label"
          optional={true}
          disabled={true}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Container>

      <Container>
        <Status name="alcoólico" />
        <Status name="especial" />
        <Status name="gelado" />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.background};
  padding: 30px;
  gap: 5px;
`;

export default App;
