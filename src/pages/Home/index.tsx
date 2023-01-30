import { ThemeProvider } from "styled-components";
import { CartCatalog, Header, Menu } from "../../components";

import { useEffect, useState } from "react";

import { ICartItem, ICoffee } from "../../@types/coffee";

import { api } from "../../services";
import { defaultTheme } from "../../styles/themes";

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
      <Header cartItems={cartItems} showCartItems={showCartItems} />

      {isCartItems ? (
        <CartCatalog
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ) : null}

      <Menu
        coffeeList={coffeeList}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
      />
    </ThemeProvider>
  );
}
