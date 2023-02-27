import { CartButton, LocationButton } from "../../components";
import { ContentContainer, HeaderContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { ICartItem } from "../../@types/coffee";
import Logo from "../../assets/logo.svg";
import { useUserLocation } from "../../hooks";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
}

export const Header = ({ cartItems }: HeaderProps) => {
  // HOOKS
  const { userClickToGetLocation, userLocation, isLoading } = useUserLocation();

  // ROUTER
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={Logo} alt="Coffee Delivery" onClick={() => navigate("/")} />

        <div className="flex gap-3">
          <LocationButton
            onClick={userClickToGetLocation}
            userLocation={userLocation}
            isLoading={isLoading}
          />
          <CartButton
            variant="SECONDARY"
            quantity={cartItems.length}
            onClick={() => navigate("/cart")}
            icon={<ShoppingCart size={22} weight="fill" />}
          />
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
};
