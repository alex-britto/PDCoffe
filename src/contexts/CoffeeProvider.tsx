import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffee } from "../@types/coffee";

export const CoffeeContext = createContext<ICoffee[]>([]);

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const getCoffee = async () => {
      const response = await fetch("/api/coffee");
      const data = await response.json();
      setCoffee(data);
    };

    getCoffee();
  }, []);

  return (
    <CoffeeContext.Provider value={coffee}>{children}</CoffeeContext.Provider>
  );
};
