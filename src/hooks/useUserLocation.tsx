import { useEffect, useState } from "react";
import { convertUFTo2Letters } from "../utils";

interface AddressDataProps {
  address: {
    country_code: string;
    state: string;
    city: string;
  };
}

export const useUserLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userCountry, setUserCountry] = useState("");
  const [userUf, setUserUf] = useState("");
  const [userCity, setUserCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function userClickToGetLocation() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }
  function handleSuccess(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  }

  function handleError(error: GeolocationPositionError) {
    console.error(error);
  }

  function getUserAddress() {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data: AddressDataProps) => {
        const { address } = data;
        const uf = convertUFTo2Letters(address.state);

        localStorage.setItem("userCountry", address.country_code.toUpperCase());
        localStorage.setItem("userUf", uf);
        localStorage.setItem("userCity", address.city);

        setUserCountry(address.country_code.toUpperCase());
        setUserUf(uf);
        setUserCity(address.city);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const userCountry = localStorage.getItem("userCountry");
    const userUf = localStorage.getItem("userUf");
    const userCity = localStorage.getItem("userCity");

    if (userUf && userCity && userCountry) {
      setUserCountry(userCountry);
      setUserUf(userUf);
      setUserCity(userCity);
      setIsLoading(false);
    }

    if (latitude !== 0 && longitude !== 0) {
      getUserAddress();
      setIsLoading(false);
    }
  }, [latitude, longitude]);

  return {
    userCountry,
    userUf,
    userCity,
    latitude,
    longitude,
    isLoading,
    userClickToGetLocation,
  };
};
