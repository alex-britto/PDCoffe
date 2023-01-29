import { ShoppingCart } from "phosphor-react";
import { ThemeProvider } from "styled-components";
import {
  CartButton,
  CartItem,
  CatalogItem,
  Spinner,
  Typography,
} from "../../components";
import { handleConvertPriceNumberToString } from "../../utils";

import { useEffect, useState } from "react";

import { ICartItem, ICoffee } from "../../@types/coffee";
import { api } from "../../services";
import { defaultTheme } from "../../styles/themes";
import { CartContainer, CoffeesContainer, Container } from "./styles";

export function Home() {
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartItems, setIsCartItems] = useState(false);

  const handleAddToCart = async (coffee: ICartItem) => {
    const response = await api.post("/cart", {
      id: coffee.id,
      title: coffee.title,
      price: coffee.price,
      imageUrl: coffee.imageUrl,
      quantity: coffee.quantity,
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
              onAddToCart={(coffee: ICartItem) => handleAddToCart(coffee)}
            />
          ))
        )}
      </CoffeesContainer>
    </ThemeProvider>
  );
}
