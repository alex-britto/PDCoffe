import { AddressData } from "../@types/coffee";
import { useState } from "react";

export const useAddressAutoComplete = () => {
  const [address, setAddress] = useState<AddressData>({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleAddressAutoComplete = async (cep: string) => {
    if (cep.length === 8) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setAddress(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { address, isLoading, handleAddressAutoComplete };
};
