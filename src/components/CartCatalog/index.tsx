import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { calculateTotalPrice } from "../../utils";
import { CartItem } from "../CartItem";
import { Typography } from "../Typography";
import { Container } from "./styles";

interface CartCatalogProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  handleRemoveItemFromCart: (id: number) => void;
}

export const CartCatalog = ({
  cartItems,
  handleRemoveItemFromCart,
}: CartCatalogProps) => {
  return (
    <Container>
      {cartItems.length === 0 ? (
        <Typography
          size={16}
          weight={400}
          color={defaultTheme.colors.base.title}
          family={defaultTheme.fonts.baloo}
        >
          Nenhum item no carrinho
        </Typography>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            coffee={item}
            onRemoveCartItem={() => handleRemoveItemFromCart(item.id)}
          />
        ))
      )}

      <Typography
        size={16}
        weight={400}
        color={defaultTheme.colors.base.title}
        family={defaultTheme.fonts.baloo}
      >
        Total: R$ {calculateTotalPrice(cartItems)}
      </Typography>
    </Container>
  );
};
