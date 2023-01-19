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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <TextInput
          placeholder="Label"
          optional={true}
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
        <Status className="p-4" name="alcoólico" />
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
