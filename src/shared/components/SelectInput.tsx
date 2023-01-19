import { HTMLAttributes, useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import CustomIcon, { Icons } from "./CustomIcon";

export type SelectOptionType = {
	id: string;
	label: string;
	value: string;
	iconName: Icons;
};

interface SelectInputProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	options: SelectOptionType[];
	onChange: (value: string) => void;
	defaultValue?: string;
}

const SelectInput = ({
	options,
	onChange,
	defaultValue,
	...rest
}: SelectInputProps) => {
	const [value, setValue] = useState<string>(defaultValue as string);

	const theme = useTheme();

	useEffect(() => {
		value && onChange(value);
	}, [value]);

	const onChangeHandler = (id: string) => {
		setValue(id);
	};

	return (
		<StyledSelectInput {...rest}>
			{options.map((option) => (
				<CustomOption
					key={option.id}
					isSelected={option.id === value}
					onClick={() => onChangeHandler(option.id)}
				>
					<CustomIcon
						size={16}
						name={option.iconName}
						color={theme.colors.purple.default}
					/>
					{option.label}
				</CustomOption>
			))}
		</StyledSelectInput>
	);
};

export default SelectInput;

interface CustomOptionProps {
	isSelected: boolean;
}

const CustomOption = styled.div<CustomOptionProps>`
	${({ theme, isSelected }) => css`
		padding: 16px;
		border-radius: 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
		font-weight: 400;
		font-size: 12px;
		border: transparent 1px solid;

		${isSelected &&
		css`
			border: ${theme.colors.purple.default} 1px solid;
			color: ${theme.colors.base.text};
			background-color: ${theme.colors.purple.light};
		`}

		${!isSelected &&
		css`
			color: ${theme.colors.base.text};
			background-color: ${theme.colors.base.button};
			&:hover {
				background-color: ${theme.colors.base.hover};
			}
		`}
	`}
`;

const StyledSelectInput = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: 5px;
		cursor: pointer;
	`}
`;
