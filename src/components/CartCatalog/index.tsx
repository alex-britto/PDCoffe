import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";

import { useTheme } from "styled-components";
import { calculateTotalPrice } from "../../utils";
import { CartItem } from "../CartItem";
import Typography from "../Typography";
import { Container } from "./styles";

interface CartCatalogProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  handleRemoveItemFromCart: (id: number) => void;
}

export const CartCatalog = ({
  cartItems,
  handleRemoveItemFromCart,
}: CartCatalogProps) => {
  const theme = useTheme();

  return (
    <Container>
      {cartItems.length === 0 ? (
        <>
          <ShoppingCart size={64} color={theme.colors.base.subtitle} />
          <Typography color={theme.colors.base.title} family="Baloo 2">
            Nenhum item no carrinho
          </Typography>
        </>
      ) : (
        cartItems.map((item) => (
          <>
            <CartItem
              key={item.id}
              coffee={item}
              onRemoveCartItem={() => handleRemoveItemFromCart(item.id)}
            />
            <Typography color={theme.colors.base.title} family="Baloo 2">
              Total: R$ {calculateTotalPrice(cartItems)}
            </Typography>
          </>
        ))
      )}
    </Container>
  );
};
