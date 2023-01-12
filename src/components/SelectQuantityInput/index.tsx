import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container } from "./styles";

interface SelectQuantityInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function SelectQuantityInput({
  value,
  onChange,
}: SelectQuantityInputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleDecrementQuantity = () => {
    setInputValue(inputValue - 1);
  };

  const handleIncrementQuantity = () => {
    setInputValue(inputValue + 1);
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <Container>
      <button onClick={handleDecrementQuantity} disabled={inputValue === 1}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{inputValue}</span>
      <button onClick={handleIncrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
