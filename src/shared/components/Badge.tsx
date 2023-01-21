import styled, { css } from "styled-components";
import Typography from "./Typography";

interface BadgeProps {
	amount?: number;
}

const Badge = ({ amount }: BadgeProps) => {
	return (
		<StyledBadge amount={amount}>
			{amount && <Typography>{amount}</Typography>}
		</StyledBadge>
	);
};

export default Badge;

const StyledBadge = styled.div<BadgeProps>`
	${({ theme, amount }) => css`
		display: ${amount ? "flex" : "none"};
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -10px;
		right: -10px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		color: ${theme.colors.white};
		background-color: ${theme.colors.yellow.dark};
		font-weight: 700;
		font-size: 12px;
	`}
`;
