import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes, useState } from "react";
import { AddressData, ICartItem } from "../../@types/coffee";

import { useTheme } from "styled-components";
import {
  calculateTotalPrice,
  calculateTotalToPay,
  handleConvertPriceNumberToString,
} from "../../utils";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services";
import { Button } from "../Button";
import { CartItem } from "../CartItem";
import { Spinner } from "../Spinner";
import Typography from "../Typography";
import { Container, InfoContainer } from "./styles";

interface CartCatalogProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  handleRemoveItemFromCart: (id: number) => void;
  address: AddressData;
}

export const CartCatalog = ({
  cartItems,
  handleRemoveItemFromCart,
  address,
}: CartCatalogProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const shippingPrice = 3.5;

  function removeAllCartItems() {
    cartItems.forEach((item) => {
      handleRemoveItemFromCart(item.id);
    });
  }

  async function handleCreateNewOrder() {
    setIsLoading(true);
    const totalToPay = calculateTotalToPay(cartItems);

    const order = {
      cartItems: cartItems.map((item) => ({
        title: item.title,
        quantity: item.quantity,
      })),
      address: {
        rua: address.logradouro,
        bairro: address.bairro,
        cidade: address.localidade,
        estado: address.uf,
        cep: address.cep,
      },
      totalToPay,
    };

    await api.post("/orders", order);

    setTimeout(() => {
      removeAllCartItems();
      setIsLoading(false);
      toast.success("Pedido efetuado com sucesso!");
      navigate("/");
    }, 2000);
  }

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
            label={
              isLoading ? (
                <Spinner color={theme.colors.white} size={22} />
              ) : (
                "Confirmar pedido"
              )
            }
            bgColor={theme.colors.yellow.default}
            bgHoverColor={theme.colors.yellow.dark}
            width="100%"
            color={theme.colors.white}
            onClick={handleCreateNewOrder}
            disabled={isLoading}
          />
        </>
      )}
    </Container>
  );
};
