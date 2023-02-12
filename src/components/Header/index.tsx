import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes, useEffect, useState } from "react";
import { ICartItem } from "../../@types/coffee";
import { CartButton } from "../CartButton";
import { ContentContainer, HeaderContainer } from "./styles";

import Logo from "../../assets/logo.svg";
import { convertUFTo2Letters } from "../../utils";
import { LocationButton } from "../LocationButton";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[];
}

interface AddressDataProps {
  address: {
    city: string;
    state: string;
  };
}

export const Header = ({ cartItems }: HeaderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userUf, setUserUf] = useState("");
  const [userCity, setUserCity] = useState("");

  // TODO: Finalizar loading no hook
  // const { userUf, userCity, isLoading } = useUserLocation();

  function handleSuccess(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  }

  function handleError(error: GeolocationPositionError) {
    console.error(error);
  }

  function getUserLocation() {
    setIsLoading(true);
    navigator.geolocation.watchPosition(handleSuccess, handleError);
  }

  function getUserAddress() {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data: AddressDataProps) => {
        const { address } = data;
        const uf = convertUFTo2Letters(address.state);
        setUserUf(uf);
        setUserCity(address.city);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      getUserAddress();
    }
  }, [latitude, longitude]);

  return (
    <HeaderContainer>
      <ContentContainer>
        <img
          src={Logo}
          alt="Coffee Delivery"
          onClick={() => (window.location.href = "/")}
        />

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
            onClick={() => (window.location.href = "/cart")}
            icon={<ShoppingCart size={22} weight="fill" />}
          />
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
};
