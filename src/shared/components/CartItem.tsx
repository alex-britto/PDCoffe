import { HTMLAttributes, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { CartProduct } from "../../App";
import Button from "./Button";
import { CatalogItemInfo } from "./CatalogItem";
import NumberInput from "./NumberInput";
import Typography from "./Typography";

interface CartItemProps extends HTMLAttributes<HTMLDivElement> {
	cartProduct: CartProduct;
	productsList: CatalogItemInfo[];
	onRemoveCartProduct: (productId: string) => void;
	onProductQtyChange: (productId: string, newProductQty: number) => void;
}

const CartItem = ({
	cartProduct,
	productsList,
	onRemoveCartProduct,
	onProductQtyChange,
	...rest
}: CartItemProps) => {
	const [itemQty, setItemQty] = useState(cartProduct.qty);

	const cartItemInfo = useMemo(
		() => productsList.find((item) => item.id === cartProduct.id),
		[productsList]
	);

	useEffect(() => {
		cartItemInfo && onProductQtyChange(cartItemInfo?.id, itemQty);
	}, [itemQty]);

	return (
		<StyledCartItem {...rest}>
			<div className="flex flex-row gap-5 w-full">
				<div className="w-16 h-16">
					<img src={cartItemInfo?.imageUrl} alt={cartItemInfo?.title} />
				</div>
				<div className="flex flex-col gap-2">
					<Typography variant="textMedium">{cartItemInfo?.title}</Typography>
					<div className="flex gap-2">
						<NumberInput min={1} onChange={setItemQty} value={itemQty} />
						<Button
							onClick={() => onRemoveCartProduct(cartItemInfo?.id as string)}
							variant="small"
							leftIcon="Trash"
						>
							REMOVER
						</Button>
					</div>
				</div>
				<Typography className="ml-auto" variant="textBoldMedium">
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(cartItemInfo?.price as number)}
				</Typography>
			</div>
		</StyledCartItem>
	);
};

export default CartItem;

const StyledCartItem = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.base.card};
		border-radius: 5px;
		padding: 8px 15px 8px 8px;
		display: flex;
	`}
`;
