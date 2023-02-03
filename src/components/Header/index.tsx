import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes, useEffect, useState } from "react";
import { ICartItem } from "../../@types/coffee";
import { CartButton } from "../CartButton";
import { HeaderContainer } from "./styles";

import Logo from "../../assets/logo.svg";
import { convertUFTo2Letters } from "../../utils";
import { LocationButton } from "../LocationButton";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
  onShowCartItens: () => void;
}

export const Header = ({ cartItems, onShowCartItens }: HeaderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userUf, setUserUf] = useState("");
  const [userCity, setUserCity] = useState("");

  function getUserLocation() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      setIsLoading(false);
    });
  }

  function getUserAddress() {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { address } = data;
        const uf = convertUFTo2Letters(address.state);
        setUserUf(uf);
        setUserCity(address.city);
      });
  }

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      getUserAddress();
    }
  }, [latitude, longitude]);

  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery" />

      <div className="flex gap-3">
        <LocationButton
          onClick={getUserLocation}
          userUf={userUf}
          userCity={userCity}
          isLoading={isLoading}
        />
        <CartButton
          variant="SECONDARY"
          quantity={cartItems.length}
          onClick={onShowCartItens}
          icon={<ShoppingCart size={22} />}
        />
      </div>
    </HeaderContainer>
  );
};
