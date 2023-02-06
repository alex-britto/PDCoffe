import { useEffect, useState } from "react";
import { convertUFTo2Letters } from "../utils";

interface AddressDataProps {
  address: {
    state: string;
    city: string;
  };
}

export const useUserLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userUf, setUserUf] = useState("");
  const [userCity, setUserCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function handleSuccess(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  }

  function handleError(error: GeolocationPositionError) {
    console.error(error);
  }

  navigator.geolocation.watchPosition(handleSuccess, handleError);

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

  return { userUf, userCity, latitude, longitude, isLoading };
};
