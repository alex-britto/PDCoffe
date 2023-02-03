import { MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { Spinner } from "../Spinner";
import Typography from "../Typography";
import { ButtonContainer } from "./styles";

interface LocationButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  userUf?: string;
  userCity?: string;
}

export const LocationButton = ({
  onClick,
  isLoading,
  userUf,
  userCity,
}: LocationButtonProps) => {
  const theme = useTheme();

  return (
    <ButtonContainer onClick={onClick}>
      {isLoading ? (
        <Spinner size={22} color={theme.colors.purple.dark} />
      ) : (
        <>
          <MapPin size={22} weight="fill" color={theme.colors.purple.default} />
          <Typography size={14} color={theme.colors.purple.dark}>
            {userCity ? `${userCity}, ${userUf}` : "Sua localização"}
          </Typography>
        </>
      )}
    </ButtonContainer>
  );
};
