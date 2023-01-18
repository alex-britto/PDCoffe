import { Bank, CreditCard, Money, ShoppingCart, Trash } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import {
  Button,
  CardCoffee,
  CartButton,
  DeleteButton,
  SelectPaymentInput,
  Spinner,
  TextInput,
} from "./components";

import { useEffect, useState } from "react";
import { Coffee } from "./@types/coffee";
import { api } from "./services/api";
import { defaultTheme } from "./styles/themes";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [isDebitSelected, setDebitIsSelected] = useState(false);
  const [isCreditSelected, setIsCreditSelected] = useState(false);
  const [isMoneySelected, setIsMoneySelected] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete() {}

  function handleAddToCart() {}

  function handleClick() {}

  const handleGetCoffeesFromApi = async () => {
    setIsLoading(true);
    const response = await api.get("/coffees");
    const data = response.data;
    setCoffeeList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetCoffeesFromApi();
  }, []);

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

      <CoffeesContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          coffeeList.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))
        )}
      </CoffeesContainer>
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

const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  width: 100%;
  max-width: 1120px;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

export default App;
