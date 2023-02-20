import { ReactNode, useEffect, useState } from "react";

import { useTheme } from "styled-components";
import Typography from "../Typography";
import { Container } from "./styles";

interface SelectPaymentInputProps {
  id: string;
  label: string;
  icon: ReactNode;
  onChange?: (isSelected: boolean) => void;
}

export function SelectPaymentInput({
  label,
  icon,
  onChange,
}: SelectPaymentInputProps) {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const theme = useTheme();

  function handleSelectCard() {
    setIsCardSelected(!isCardSelected);
  }

  useEffect(() => {
    onChange && onChange(isCardSelected);
  }, [isCardSelected]);

  return (
    <Container isSelected={isCardSelected} onClick={handleSelectCard}>
      <div>{icon}</div>

      <Typography size={12} color={theme.colors.base.text}>
        {label}
      </Typography>
    </Container>
  );
}
