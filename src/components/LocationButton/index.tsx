import { Spinner, Typography } from "../../components";

import { MapPin } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { UserLocationProps } from "../../hooks/useUserLocation";
import { ButtonContainer } from "./styles";

interface LocationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  userLocation: UserLocationProps;
}

export const LocationButton = ({
  onClick,
  isLoading,
  userLocation: { country, city, uf },
}: LocationButtonProps) => {
  // THEME HOOK
  const theme = useTheme();

  // FUNCTIONS
  const showUserLocation = () => {
    // Se o usuário não tiver selecionado uma localização, mostrar "Enviar para"
    // Se o estado (uf) for "UF", mostrar apenas a cidade e o país
    // Se o estado (uf) e a cidade estiverem preenchidos, mostrar apenas a cidade e o estado

    if (uf === "UF") {
      return `${city}, ${country}`;
    }

    if (uf && city) {
      return `${city}, ${uf}`;
    }

    return "Enviar para";
  };

  return (
    <ButtonContainer onClick={onClick}>
      {isLoading ? (
        <Spinner size={22} color={theme.colors.purple.dark} />
      ) : (
        <>
          <MapPin size={22} weight="fill" color={theme.colors.purple.default} />

          <Typography size={14} color={theme.colors.purple.dark}>
            {showUserLocation()}
          </Typography>
        </>
      )}
    </ButtonContainer>
  );
};
