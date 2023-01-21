import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import CustomIcon from "./CustomIcon";

interface NumberInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	defaultValue?: number;
	onChange: (value: number) => void;
}

const NumberInput = ({
	min,
	max,
	onChange,
	defaultValue = 1,
	className,
}: NumberInputProps) => {
	const [value, setValue] = useState<number>(defaultValue);

	const numberInputRef = useRef(null);
	const theme = useTheme();

	const onInputChangeHandler = (operation: "plus" | "minus") => {
		if (operation === "plus") {
			setValue((prevState) => (prevState === max ? prevState : prevState + 1));
		}
		if (operation === "minus") {
			setValue((prevState) => (prevState === min ? prevState : prevState - 1));
		}
	};

	useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<NumberInputWrapper className={className}>
			<CustomIcon
				name="Minus"
				color={theme.colors.purple.default}
				size={14}
				onClick={() => onInputChangeHandler("minus")}
				className="hover:cursor-pointer"
			/>
			<StyledNumberInput
				value={value || defaultValue}
				onChange={() => null}
				min={0}
				max={10}
				ref={numberInputRef}
				type="number"
			/>
			<CustomIcon
				name="Plus"
				color={theme.colors.purple.default}
				size={14}
				onClick={() => onInputChangeHandler("plus")}
				className="hover:cursor-pointer"
			/>
		</NumberInputWrapper>
	);
};

export default NumberInput;

const NumberInputWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.base.button};
		width: fit-content;
		border-radius: 6px;
		padding: 8px;
		min-height: 32px;
	`}
`;
const StyledNumberInput = styled.input`
	${({ theme }) => css`
		width: 20px;
		text-align: center;
		background-color: inherit;
		margin: 0px 4px;
	`}
`;
