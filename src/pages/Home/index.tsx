import { useEffect, useState } from "react";
import { ICartItem, ICoffee } from "../../@types/coffee";
import { CartCatalog, Header, Menu } from "../../components";
import { api } from "../../services";
import { Container } from "./styles";

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

    handleGetCoffeesFromCart();
  };

  const handleGetCoffeesFromApi = async () => {
    setIsLoading(true);
    const response = await api.get("/coffees");
    const data = response.data;
    setCoffeeList(data);
    setIsLoading(false);
  };

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
    handleGetCoffeesFromApi();
    handleGetCoffeesFromCart();
  }, []);

  return (
    <Container>
      <Header cartItems={cartItems} />

      {isCartItems && (
        <CartCatalog
          cartItems={cartItems}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      )}

      <Menu
        coffeeList={coffeeList}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />
    </Container>
  );
}
