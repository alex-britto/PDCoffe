import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

interface ButtonProps {
	children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;

export const StyledButton = styled.button`
	${({ theme }: { theme: typeof defaultTheme }) => css`
		border-radius: 6px;
		color: white;
		background-color: ${theme.colors.yellow.default};
		padding: 12px 8px;
		width: 132px;

		&:hover {
			background-color: ${theme.colors.yellow.dark};
		}
	`}
`;
