import {
  AddressData,
  ICartItem,
  PaymentOptions,
  UserData,
} from "../../@types/coffee";
import { Button, CartItem, Typography } from "../../components";
import { Container, InfoContainer } from "./styles";
import { HTMLAttributes, useState } from "react";
import {
  calculateTotalPrice,
  calculateTotalToPay,
  handleConvertPriceNumberToString,
} from "../../utils";

import { ShoppingCart } from "phosphor-react";
import { api } from "../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

interface CartCatalogProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  handleRemoveItemFromCart: (id: number) => void;
  address: AddressData;
  userData: UserData;
  payment: PaymentOptions;
  numero: string;
  complemento?: string;
}

export const CartCatalog = ({
  cartItems,
  handleRemoveItemFromCart,
  address,
  userData,
  payment: paymentMethod,
  numero: number,
  complemento: complement,
}: CartCatalogProps) => {
  // CONTEXTS
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // CONSTANTS
  const shippingPrice = 3.5;

  // FUNCTIONS
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
        price: item.price,
      })),
      user: {
        name: userData.nome,
        phone: userData.telefone,
        cpf: userData.cpf,
        cnpj: userData.cnpj,
      },
      address: {
        street: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
        uf: address.uf,
        cep: address.cep,
        number,
        complement,
      },
      totalToPay,
      paymentMethod,
    };

    await api.post("/orders", order);
    console.log(order);

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
            label={isLoading ? "Fazendo pedido..." : "Confirmar pedido"}
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
