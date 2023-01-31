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
