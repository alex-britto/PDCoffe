import { HTMLAttributes } from "react";
import CatalogItem, { CatalogItemInfo } from "./CatalogItem";
import { Loader } from "./Loader";

interface CatalogListProps extends HTMLAttributes<HTMLUListElement> {
	catalogItems: CatalogItemInfo[];
	handleAddCartProduct: (qty: number, productId: string) => void;
	isLoading: boolean;
}

const CatalogList = ({
	catalogItems,
	handleAddCartProduct,
	isLoading,
	...rest
}: CatalogListProps) => {
	return (
		<>
			{isLoading ? (
				<div className="w-full flex justify-center items-center">
					<Loader />
				</div>
			) : (
				<ul {...rest}>
					{catalogItems.map((product) => (
						<CatalogItem
							key={product.id}
							catalogItemInfo={product}
							onAddCartProduct={handleAddCartProduct}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export default CatalogList;
