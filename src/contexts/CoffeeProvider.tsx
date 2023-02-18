import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeContextProps, ICartItem, ICoffee } from "../@types/coffee";
import { api } from "../services";

export const CoffeeContext = createContext({} as CoffeeContextProps);

export const CoffeeProvider = ({ children }: { children: ReactNode }) => {
  // STATES
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // FUNCTIONS
  const handleGetCoffeesFromCart = async () => {
    try {
      const response = await api.get("/cart");
      const data = response.data;
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoffeeFromApi = async () => {
    try {
      const response = await api.get("/coffees");
      const data = response.data;
      setCoffeeList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async (coffee: ICartItem) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveItemFromCart = async (id: number) => {
    try {
      await api.delete(`/cart/${id}`);
      handleGetCoffeesFromCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeQuantity = async (id: number, quantity: number) => {
    try {
      await api.put(`/cart/${id}`, {
        ...cartItems.find((item) => item.id === id),
        quantity,
      });
      handleGetCoffeesFromCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffeeFromApi();
    handleGetCoffeesFromCart();
  }, []);

  return (
    <CoffeeContext.Provider
      value={{
        isLoading,
        coffeeList,
        cartItems,
        handleAddToCart,
        handleRemoveItemFromCart,
        handleChangeQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
