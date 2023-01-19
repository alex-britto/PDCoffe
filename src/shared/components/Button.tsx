import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, useTheme } from "styled-components";
import CustomIcon from "./CustomIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "large" | "small";
	leftIcon?: "Trash";
}

const Button = ({ children, variant, leftIcon, ...rest }: ButtonProps) => {
	const theme = useTheme();

	return (
		<StyledButton variant={variant} {...rest}>
			{leftIcon && (
				<CustomIcon
					name="Trash"
					size={16}
					className="mr-1"
					color={theme.colors.purple.default}
				/>
			)}
			{children}
		</StyledButton>
	);
};

export default Button;

interface StyledButtonProps {
	variant?: "large" | "small";
}

const StyledButton = styled.button<StyledButtonProps>`
	${({ theme, variant }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6px;

		${variant === "large" &&
		css`
			padding: 12px 8px;
			font-size: 14px;
			font-weight: 700;
			color: ${theme.colors.white};
			background-color: ${theme.colors.yellow.default};

			&:hover {
				background-color: ${theme.colors.yellow.dark};
			}
		`};

		${variant === "small" &&
		css`
			padding: 0px 8px;
			font-size: 12px;
			font-weight: 400;
			height: 32px;
			color: ${theme.colors.base.text};
			background-color: ${theme.colors.base.button};

			&:hover {
				color: ${theme.colors.base.subtitle};
				background-color: ${theme.colors.base.hover};
			}
		`}
	`}
`;
