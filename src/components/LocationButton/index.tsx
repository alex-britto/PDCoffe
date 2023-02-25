import { Spinner, Typography } from "../../components";

import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";
import { MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

interface LocationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  userCountry?: string;
  userUf?: string;
  userCity?: string;
}

export const LocationButton = ({
  onClick,
  isLoading,
  userCountry,
  userUf,
  userCity,
}: LocationButtonProps) => {
  // THEME HOOK
  const theme = useTheme();

  // FUNCTIONS
  const showUserLocation = () => {
    if (userUf === "UF") {
      return `${userCity}, ${userCountry}`;
    }

    if (userUf && userCity) {
      return `${userCity}, ${userUf}`;
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
