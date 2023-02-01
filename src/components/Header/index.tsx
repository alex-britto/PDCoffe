import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { CartButton } from "../CartButton";
import Typography2 from "../Typography2";
import { HeaderContainer } from "./styles";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  onShowCartItens: () => void;
}

export const Header = ({ cartItems, onShowCartItens }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Typography2
        size={32}
        weight="bold"
        color={defaultTheme.colors.base.title}
        family="Baloo 2"
      >
        PDCoffee
      </Typography2>
      <CartButton
        variant="SECONDARY"
        quantity={cartItems.length}
        onClick={onShowCartItens}
        icon={<ShoppingCart size={22} />}
      />
    </HeaderContainer>
  );
};
