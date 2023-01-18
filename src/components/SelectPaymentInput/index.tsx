import { ReactNode, useEffect, useState } from "react";
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

  function handleSelectCard() {
    setIsCardSelected(!isCardSelected);
  }

  useEffect(() => {
    onChange && onChange(isCardSelected);
  }, [isCardSelected]);

  return (
    <Container isSelected={isCardSelected} onClick={handleSelectCard}>
      <div>{icon}</div>
      <span>{label}</span>
    </Container>
  );
}
