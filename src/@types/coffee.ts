export interface ICoffee {
  id: number;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  tags: string[];
}

export interface ICartItem {
  quantity: number;
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export interface CoffeeContextProps {
  isLoading: boolean;
  coffeeList: ICoffee[];
  cartItems: ICartItem[];
  handleAddToCart: (coffee: ICartItem) => Promise<void>;
  handleRemoveItemFromCart: (id: number) => Promise<void>;
  handleChangeQuantity: (id: number, quantity: number) => Promise<void>;
}

export interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface UserData {
  nome: string;
  cpf: string;
  telefone: string;
  cnpj?: string;
}

export enum PaymentOptions {
  CREDIT_CARD = "creditCard",
  DEBIT_CARD = "debitCard",
  MONEY = "money",
}
