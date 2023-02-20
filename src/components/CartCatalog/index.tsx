import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";

import { useTheme } from "styled-components";
import {
  calculateTotalPrice,
  calculateTotalToPay,
  handleConvertPriceNumberToString,
} from "../../utils";

import { Button } from "../Button";
import { CartItem } from "../CartItem";
import Typography from "../Typography";
import { Container, InfoContainer } from "./styles";

interface CartCatalogProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  handleRemoveItemFromCart: (id: number) => void;
}

export const CartCatalog = ({
  cartItems,
  handleRemoveItemFromCart,
}: CartCatalogProps) => {
  const theme = useTheme();

  const shippingPrice = 3.5;

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
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              coffee={item}
              onRemoveCartItem={() => handleRemoveItemFromCart(item.id)}
            />
          ))}

          <InfoContainer>
            <div className="flex justify-between w-full">
              <Typography color={theme.colors.base.text} size={14}>
                Total de itens:
              </Typography>
              <Typography color={theme.colors.base.text}>
                R$ {calculateTotalPrice(cartItems)}
              </Typography>
            </div>

            <div className="flex justify-between w-full">
              <Typography color={theme.colors.base.text} size={14}>
                Entrega:
              </Typography>
              <Typography color={theme.colors.base.text}>
                R$ {handleConvertPriceNumberToString(shippingPrice)}
              </Typography>
            </div>

            <div className="flex justify-between w-full">
              <Typography
                color={theme.colors.base.subtitle}
                size={20}
                weight={700}
              >
                Total:
              </Typography>
              <Typography
                color={theme.colors.base.subtitle}
                size={20}
                weight={700}
              >
                R$ {calculateTotalToPay(cartItems)}
              </Typography>
            </div>
          </InfoContainer>

          <Button
            label="Confirmar pedido"
            bgColor={theme.colors.yellow.default}
            bgHoverColor={theme.colors.yellow.dark}
            width="100%"
            color={theme.colors.white}
            onClick={() => console.log("Confirmar pedido")}
          />
        </>
      )}
    </Container>
  );
};
