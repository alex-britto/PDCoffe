import { useContext } from "react";
import { CartCatalog, Header } from "../../components";
import { CoffeeContext } from "../../contexts";
import { ContentContainer, FormContainer } from "./styles";

export function Cart() {
  const { cartItems, handleRemoveItemFromCart } = useContext(CoffeeContext);

  return (
    <>
      <Header cartItems={cartItems} />

      <ContentContainer>
        <FormContainer>
          <h1>Formulário de compra</h1>
        </FormContainer>

        <CartCatalog
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart!}
        />
      </ContentContainer>
    </>
  );
}
