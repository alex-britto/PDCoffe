import { useEffect, useState } from "react";
import { ICartItem } from "../../@types/coffee";
import { CartCatalog, Header } from "../../components";
import { api } from "../../services";
import { ContentContainer, FormContainer } from "./styles";

export function Cart() {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleGetCoffeesFromCart = async () => {
    const response = await api.get("/cart");
    const data = response.data;
    setCartItems(data);
  };

  const handleRemoveItemFromCart = async (id: number) => {
    await api.delete(`/cart/${id}`);
    handleGetCoffeesFromCart();
  };

  useEffect(() => {
    handleGetCoffeesFromCart();
  }, []);

  return (
    <>
      <Header cartItems={cartItems} />

      <ContentContainer>
        <FormContainer>
          <h1>Formulário de compra</h1>
        </FormContainer>

        <CartCatalog
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </ContentContainer>
    </>
  );
}
