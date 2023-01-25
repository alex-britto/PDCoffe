import { HTMLAttributes, useState } from "react";
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

interface CatalogItemProps extends HTMLAttributes<HTMLDivElement> {
	catalogItemInfo: CatalogItemInfo;
	onAddCartProduct: (qty: number, productId: string) => void;
}

const CatalogItem = ({
	catalogItemInfo,
	onAddCartProduct,
	...rest
}: CatalogItemProps) => {
	const [qty, setQty] = useState(0);
	const theme = useTheme();

	return (
		<StyledCatalogItem {...rest}>
			<div className="productImageWrapper">
				<img src={catalogItemInfo.imageUrl} alt={catalogItemInfo.title} />
			</div>
			<ul className="flex flex-row justify-center gap-1 w-full">
				{catalogItemInfo.typeTags.map((tag, index) => {
					return <Status key={`${tag}-${index}`} label={tag} />;
				})}
			</ul>
			<Typography
				fontFamily="Baloo2"
				fontSize={20}
				fontWeight="Bold"
				color={theme.colors.base.subtitle}
				className="mt-4 mb-2"
			>
				{catalogItemInfo.title}
			</Typography>
			<Typography
				fontFamily="Roboto"
				fontSize={14}
				lineHeight={18}
				fontWeight="Regular"
				color={theme.colors.base.label}
				className="mb-8"
			>
				{catalogItemInfo.description}
			</Typography>
			<div className="flex flex-row justify-between items-center w-full">
				<div className="flex flex-row gap-1 items-center">
					<Typography
						fontFamily="Roboto"
						fontSize={14}
						lineHeight={18}
						fontWeight="Regular"
						color={theme.colors.base.text}
					>
						R$
					</Typography>
					<Typography
						fontFamily="Baloo2"
						fontSize={24}
						fontWeight="ExtraBold"
						color={theme.colors.base.text}
					>
						{catalogItemInfo.price.toFixed(2)}
					</Typography>
				</div>
				<div className="flex flex-row gap-2">
					<NumberInput min={0} onChange={(value) => setQty(value)} />
					<CartButton
						onClick={() => onAddCartProduct(qty, catalogItemInfo.id)}
					/>
				</div>
			</div>
		</StyledCatalogItem>
	);
};

export default CatalogItem;

const StyledCatalogItem = styled.div`
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
