import { CartButton, LocationButton } from "../../components";
import { ContentContainer, HeaderContainer } from "./styles";

import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import Logo from "../../assets/logo.svg";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useUserLocation } from "../../hooks";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
}

export const Header = ({ cartItems }: HeaderProps) => {
  // CONTEXT
  const { userClickToGetLocation, userCountry, userUf, userCity, isLoading } =
    useUserLocation();

  // ROUTER
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={Logo} alt="Coffee Delivery" onClick={() => navigate("/")} />

        <div className="flex gap-3">
          <LocationButton
            onClick={userClickToGetLocation}
            userCountry={userCountry}
            userUf={userUf}
            userCity={userCity}
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
