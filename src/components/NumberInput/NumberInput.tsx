import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

const StyledNumberInput = styled.div`
  min-width: 72px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.base.button};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  gap: 4px;
  padding: 8px;
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  svg {
    cursor: pointer;
  }
  svg > line {
    stroke: ${({ theme }) => theme.colors.purple.default};
  }
  svg:hover > line {
    stroke: ${({ theme }) => theme.colors.purple.dark};
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default function NumberInput({
  value,
  onChange,
  // min,
  max,
  ...props
}: {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
}) {
  const onMinusClick = (prev) => {
    return props.hasOwnProperty("min") && value > props.min
      ? prev - 1
      : prev;
  };

  const onPlusClick = (prev) =>
    !!max && value < max ? prev + 1 : prev;

  return (
    <StyledNumberInput>
      <Minus onClick={() => onChange(onMinusClick)} />
      <span>{value}</span>
      <Plus onClick={() => onChange(onPlusClick)} />
    </StyledNumberInput>
  );
}
