import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { CartButton } from "../CartButton";
import { Typography } from "../Typography";
import { HeaderContainer } from "./styles";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  onShowCartItens: () => void;
}

export const Header = ({ cartItems, onShowCartItens }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Typography
        size={32}
        weight={700}
        color={defaultTheme.colors.base.title}
        family={defaultTheme.fonts.baloo}
      >
        PDCoffee
      </Typography>
      <CartButton
        variant="SECONDARY"
        quantity={cartItems.length}
        onClick={onShowCartItens}
        icon={<ShoppingCart size={22} />}
      />
    </HeaderContainer>
  );
};
