import { Dispatch, InputHTMLAttributes, SetStateAction, useRef } from "react";
import styled, { css, useTheme } from "styled-components";
import CustomIcon from "./CustomIcon";

interface NumberInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	defaultValue?: number;
	value: number;
	onChange: Dispatch<SetStateAction<number>>;
}

const NumberInput = ({
	min,
	max,
	value,
	onChange,
	defaultValue = 1,
	className,
}: NumberInputProps) => {
	const numberInputRef = useRef(null);
	const theme = useTheme();

	const onInputChangeHandler = (operation: "plus" | "minus") => {
		if (operation === "plus") {
			onChange((prevState) => (prevState === max ? prevState : prevState + 1));
		}
		if (operation === "minus") {
			onChange((prevState) => (prevState === min ? prevState : prevState - 1));
		}
	};

	return (
		<NumberInputWrapper className={className}>
			<ButtonWrapper
				className="hover:cursor-pointer"
				onClick={() => onInputChangeHandler("minus")}
			>
				<CustomIcon
					name="Minus"
					color={theme.colors.purple.default}
					size={14}
				/>
			</ButtonWrapper>
			<StyledNumberInput
				value={value || defaultValue}
				onChange={() => null}
				min={0}
				max={10}
				ref={numberInputRef}
				type="number"
			/>
			<ButtonWrapper
				className="hover:cursor-pointer"
				onClick={() => onInputChangeHandler("plus")}
			>
				<CustomIcon name="Plus" color={theme.colors.purple.default} size={14} />
			</ButtonWrapper>
		</NumberInputWrapper>
	);
};

export default NumberInput;

const ButtonWrapper = styled.button`
	${({ theme }) => css`
		padding: 8px;
		height: 100%;
		border-radius: 6px;
		display: flex;
		align-items: center;

		&:hover {
			background-color: ${theme.colors.base.hover};
		}
	`}
`;

const NumberInputWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.base.button};
		width: fit-content;
		border-radius: 6px;
	`}
`;
const StyledNumberInput = styled.input`
	${({ theme }) => css`
		width: 20px;
		text-align: center;
		background-color: inherit;

		&:focus-visible {
			outline: none;
		}
	`}
`;
