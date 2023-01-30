import { ICartItem } from "../@types/coffee";
import { handleConvertPriceNumberToString } from "./formatCurrency";

export const calculateTotalPrice = (cartItems: ICartItem[]) => {
  const prices = cartItems.map((item) => item.price * item.quantity);
  const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);

  const totalPriceString = handleConvertPriceNumberToString(totalPrice);
  return totalPriceString;
};
