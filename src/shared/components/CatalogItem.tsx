import { LiHTMLAttributes, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import CartButton from "./CartButton";
import NumberInput from "./NumberInput";
import Status from "./Status";
import Typography from "./Typography";

export interface CatalogItemInfo {
	id: string;
	imageUrl: string;
	typeTags: string[];
	title: string;
	description: string;
	price: number;
}

interface CatalogItemProps extends LiHTMLAttributes<HTMLLIElement> {
	catalogItemInfo: CatalogItemInfo;
	onAddCartProduct: (qty: number, productId: string) => void;
}

const CatalogItem = ({
	catalogItemInfo,
	onAddCartProduct,
	...rest
}: CatalogItemProps) => {
	const [qty, setQty] = useState(1);
	const theme = useTheme();

	const handleCartClick = () => {
		onAddCartProduct(qty, catalogItemInfo.id);
		setQty(1);
	};

	return (
		<StyledCatalogItem {...rest}>
			<div className="productImageWrapper">
				<img src={catalogItemInfo.imageUrl} alt={catalogItemInfo.title} />
			</div>
			<ul className="flex flex-row justify-center gap-1 w-full">
				{catalogItemInfo.typeTags.map((tag, index) => {
					return (
						<li key={`${tag}-${index}`}>
							<Status label={tag} />
						</li>
					);
				})}
			</ul>
			<Typography
				variant="h3"
				color={theme.colors.base.subtitle}
				className="mt-4 mb-2"
			>
				{catalogItemInfo.title}
			</Typography>
			<Typography
				variant="textSmall"
				lineHeight={18}
				color={theme.colors.base.label}
				className="mb-8"
			>
				{catalogItemInfo.description}
			</Typography>
			<div className="flex flex-row justify-between items-center w-full">
				<div className="flex flex-row gap-1 items-center">
					<Typography
						variant="textSmall"
						lineHeight={18}
						color={theme.colors.base.text}
					>
						R$
					</Typography>
					<Typography variant="h2" color={theme.colors.base.text}>
						{catalogItemInfo.price.toFixed(2)}
					</Typography>
				</div>
				<div className="flex flex-row gap-2">
					<NumberInput min={1} value={qty} onChange={setQty} />
					<CartButton onClick={handleCartClick} />
				</div>
			</div>
		</StyledCatalogItem>
	);
};

export default CatalogItem;

const StyledCatalogItem = styled.li`
	${({ theme }) => css`
		background-color: ${theme.colors.base.card};
		border-radius: 6px 36px;
		width: 256px;
		height: 310px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		.productImageWrapper {
			margin: -40px 0 12px 0;
		}
	`}
`;
