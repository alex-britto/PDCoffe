import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { calculateTotalPrice } from "../../utils";
import { CartItem } from "../CartItem";
import Typography2 from "../Typography2";
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
        <>
          <ShoppingCart size={64} color={defaultTheme.colors.base.subtitle} />
          <Typography2 color={defaultTheme.colors.base.title} family="Baloo 2">
            Nenhum item no carrinho
          </Typography2>
        </>
      ) : (
        cartItems.map((item) => (
          <>
            <CartItem
              key={item.id}
              coffee={item}
              onRemoveCartItem={() => handleRemoveItemFromCart(item.id)}
            />
            <Typography2
              color={defaultTheme.colors.base.title}
              family="Baloo 2"
            >
              Total: R$ {calculateTotalPrice(cartItems)}
            </Typography2>
          </>
        ))
      )}
    </Container>
  );
};
