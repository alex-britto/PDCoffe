import { useEffect, useState } from "react";
import { convertUFTo2Letters } from "../utils";

export const useGetUserLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userUf, setUserUf] = useState("");
  const [userCity, setUserCity] = useState("");
  const { getCurrentPosition } = navigator.geolocation;

  function getUserLocation() {
    setIsLoading(true);
    getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
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
      .then(({ address: { state, city } }) => {
        const uf = convertUFTo2Letters(state);
        setUserUf(uf);
        setUserCity(city);
      });
  }

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      getUserAddress();
    }
  }, [latitude, longitude]);

  return {
    isLoading,
    latitude,
    longitude,
    userUf,
    userCity,
    getUserLocation,
  };
};
