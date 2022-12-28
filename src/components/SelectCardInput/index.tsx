import { CreditCard } from "phosphor-react";
import { useState } from "react";
import { Container } from "./styles";

interface SelectCardInputProps {
  label: string;
}

export function SelectCardInput({ label }: SelectCardInputProps) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelectCard() {
    setIsSelected(!isSelected);
  }

  return (
    <Container isSelected={isSelected} onClick={handleSelectCard}>
      <CreditCard size={16} color="#3129a8" />
      <span>{label}</span>
    </Container>
  );
}
