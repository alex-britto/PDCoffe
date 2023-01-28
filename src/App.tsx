import { ShoppingCart } from "phosphor-react";
import styled, { ThemeProvider } from "styled-components";
import {
  CartButton,
  CartItem,
  CatalogItem,
  Spinner,
  Typography,
} from "./components";
import { handleConvertPriceNumberToString } from "./utils/formatCurrency";

import { useEffect, useState } from "react";

import { Coffee } from "./@types/coffee";
import { api } from "./services/api";
import { defaultTheme } from "./styles/themes";

function App() {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
  const [cartItems, setCartItems] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartItems, setIsCartItems] = useState(false);

  const handleAddToCart = async (coffee: Coffee, quantity: number) => {
    const response = await api.post("/cart", {
      id: coffee.id,
      title: coffee.title,
      price: coffee.price,
      imageUrl: coffee.imageUrl,
      quantity,
    });
    const data = response.data;
    setCartItems(data);
  };

  const handleGetCoffeesFromCart = async () => {
    const response = await api.get("/cart");
    const data = response.data;
    setCartItems(data);
  };

  const handleGetCoffeesFromApi = async () => {
    setIsLoading(true);
    const response = await api.get("/coffees");
    const data = response.data;
    setCoffeeList(data);
    setIsLoading(false);
  };

  const calculateTotalPrice = () => {
    const prices = cartItems.map((item) => item.price * item.quantity);
    const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);

    const totalPriceString = handleConvertPriceNumberToString(totalPrice);
    return totalPriceString;
  };

  const showCartItems = () => {
    setIsCartItems(!isCartItems);
  };

  const handleRemoveItemFromCart = async (id: number) => {
    const response = await api.delete(`/cart/${id}`);
    const data = response.data;
    setCartItems(data);
  };

  useEffect(() => {
    handleGetCoffeesFromApi();
    handleGetCoffeesFromCart();
  }, []);

  useEffect(() => {
    handleGetCoffeesFromCart();
  }, [cartItems]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <CartButton
          style={{
            alignSelf: "flex-end",
          }}
          variant="SECONDARY"
          quantity={cartItems.length}
          onClick={showCartItems}
          icon={<ShoppingCart size={22} />}
        />
      </Container>

      {isCartItems && (
        <CartContainer>
          {cartItems.length === 0 ? (
            <Typography
              size={16}
              weight={400}
              color={defaultTheme.colors.base.title}
              family={defaultTheme.fonts.baloo}
            >
              Nenhum item no carrinho
            </Typography>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                coffee={item}
                onRemove={() => handleRemoveItemFromCart(item.id)}
              />
            ))
          )}

          <Typography
            size={16}
            weight={400}
            color={defaultTheme.colors.base.title}
            family={defaultTheme.fonts.baloo}
          >
            Total: {calculateTotalPrice()}
          </Typography>
        </CartContainer>
      )}

      <CoffeesContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          coffeeList.map((coffee) => (
            <CatalogItem
              key={coffee.id}
              coffee={coffee}
              onAddToCart={(coffee: Coffee, quantity: number) =>
                handleAddToCart(coffee, quantity)
              }
            />
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
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 448px;
  padding: 40px;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

export default App;
