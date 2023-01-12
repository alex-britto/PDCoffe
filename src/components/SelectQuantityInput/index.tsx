import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Container } from "./styles";

export function SelectQuantityInput() {
  const [value, setValue] = useState(1);

  const handleDecrementQuantity = () => {
    if (value === 1) return;

    setValue(value - 1);
  };

  const handleIncrementQuantity = () => {
    setValue(value + 1);
  };

  return (
    <Container>
      <button onClick={handleDecrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{value}</span>
      <button onClick={handleIncrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
