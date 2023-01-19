import { ChangeEvent, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface TextFieldProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	optional?: boolean;
	onChange: (value: string) => void;
}

const TextField = ({ optional, onChange, ...rest }: TextFieldProps) => {
	const onTextFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.currentTarget.value);
	};

	return (
		<TextFieldWrapper {...rest}>
			<input
				onChange={onTextFieldChangeHandler}
				placeholder="Label"
				type="text"
			/>
			{optional && <i>Opcional</i>}
		</TextFieldWrapper>
	);
};

export default TextField;

const TextFieldWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		gap: 5px;
		padding: 12px;
		border: transparent 1px solid;
		border-radius: 4px;
		background-color: ${theme.colors.base.button};
		height: 42px;
		font-size: 14px;

		&:focus-within {
			border: ${theme.colors.yellow.dark} 1px solid;

			i {
				display: none;
			}
		}

		input {
			background-color: inherit;
			border: none;
			outline: none;
			width: 100%;
		}

		i {
			color: ${theme.colors.base.label};
			font-size: 12px;
			line-height: 15.6px;
		}
	`}
`;
