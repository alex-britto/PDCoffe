import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import Badge from "./Badge";
import CustomIcon from "./CustomIcon";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	cartItemsQty?: number;
}

const CartButton = ({ cartItemsQty, ...rest }: CartButtonProps) => {
	return (
		<CartButtonWrapper>
			<Badge amount={cartItemsQty} />
			<StyledCartButton cartItemsQty={cartItemsQty} {...rest}>
				<CustomIcon name="Cart" weight="fill" size={22} />
			</StyledCartButton>
		</CartButtonWrapper>
	);
};

export default CartButton;

const CartButtonWrapper = styled.div`
	position: relative;
	width: fit-content;
`;

const StyledCartButton = styled.button<CartButtonProps>`
	${({ theme, cartItemsQty }) => css`
		color: ${cartItemsQty ? theme.colors.yellow.dark : theme.colors.white};
		background-color: ${cartItemsQty
			? theme.colors.yellow.light
			: theme.colors.purple.dark};
		border-radius: 6px;
		padding: 8px;

		&:hover {
			background-color: ${cartItemsQty
				? theme.colors.yellow.default
				: theme.colors.purple.default};
		}
	`}
`;
