import { ShoppingCart } from "phosphor-react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { CartButton } from "../CartButton";
import { Typography } from "../Typography";
import { HeaderContainer } from "./styles";

interface HeaderProps {
  cartItems: ICartItem[];
  showCartItems: () => void;
}

export const Header = ({ cartItems, showCartItems }: HeaderProps) => {
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
        style={{
          alignSelf: "flex-end",
        }}
        variant="SECONDARY"
        quantity={cartItems.length}
        onClick={showCartItems}
        icon={<ShoppingCart size={22} />}
      />
    </HeaderContainer>
  );
};
