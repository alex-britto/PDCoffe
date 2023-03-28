import { ShoppingCart, User } from "phosphor-react";
import { CartButton, LocationButton } from "../../components";
import { ContentContainer, HeaderContainer } from "./styles";

import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLocation } from "user-location-address";
import { ICartItem } from "../../@types/coffee";
import Logo from "../../assets/logo.svg";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
}

export const Header = ({ cartItems }: HeaderProps) => {
  // HOOKS
  const { userClickToGetLocation, userLocation, isLoading } = useUserLocation();

  // ROUTER
  const navigate = useNavigate();

  return (
    <HeaderContainer className="header">
      <ContentContainer>
        <img src={Logo} alt="Coffee Delivery" onClick={() => navigate("/")} />

        <div className="flex gap-3">
          {/* Teste de funcionalidade do Tailwind de criar classes customizadas */}
          <button className="btn">
            <User className="btn-icon" />
            <span className="btn-text">Entrar</span>
          </button>

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
