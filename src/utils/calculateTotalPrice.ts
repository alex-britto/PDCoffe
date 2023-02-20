import { ICartItem } from "../@types/coffee";
import { handleConvertPriceNumberToString } from "./formatCurrency";

export const calculateTotalPrice = (cartItems: ICartItem[]) => {
  const prices = cartItems.map((item) => item.price * item.quantity);
  const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);

  const totalPriceString = handleConvertPriceNumberToString(totalPrice);
  return totalPriceString;
};

export const calculateTotalToPay = (cartItems: ICartItem[]) => {
  const prices = cartItems.map((item) => item.price * item.quantity);
  const totalToPay = prices.reduce((acc, curr) => acc + curr, 0) + 3.5;

  const totalToPayString = handleConvertPriceNumberToString(totalToPay);
  return totalToPayString;
};
