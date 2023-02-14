import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes } from "react";
import { ICartItem } from "../../@types/coffee";
import { CartButton } from "../CartButton";
import { ContentContainer, HeaderContainer } from "./styles";

import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useUserLocation } from "../../hooks";
import { LocationButton } from "../LocationButton";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
}

export const Header = ({ cartItems }: HeaderProps) => {
  const { userClickToGetLocation, userCountry, userUf, userCity, isLoading } =
    useUserLocation();
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
