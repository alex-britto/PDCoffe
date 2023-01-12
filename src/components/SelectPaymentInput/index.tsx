import { ReactNode, useState } from "react";
import { Container } from "./styles";

interface SelectPaymentInputProps {
  label: string;
  icon: ReactNode;
}

export function SelectPaymentInput({ label, icon }: SelectPaymentInputProps) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelectCard() {
    setIsSelected(!isSelected);
  }

  return (
    <Container isSelected={isSelected} onClick={handleSelectCard}>
      <div>{icon}</div>
      <span>{label}</span>
    </Container>
  );
}
