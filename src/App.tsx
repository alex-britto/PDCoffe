import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./shared/components/Button";
import CartButton from "./shared/components/CartButton";
import CatalogItem, { CatalogItemInfo } from "./shared/components/CatalogItem";
import NumberInput from "./shared/components/NumberInput";
import SelectInput, { SelectOptionType } from "./shared/components/SelectInput";
import TextField from "./shared/components/TextField";

interface CartProduct {
	id: string;
	qty: number;
}

function App() {
	const [numberInputValue, setNumberInputValue] = useState<number>();
	const [selectInputValue, setSelectInputValue] = useState<string>("0");
	const [textFieldInputValue, setTextFieldInputValue] = useState<string>();
	const [isLoading, setIsLoading] = useState(true);
	const [itemData, setItemData] = useState<CatalogItemInfo[]>();
	const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

	const selectInputOptions: SelectOptionType[] = [
		{
			id: "1",
			label: "CARTÃO DE CRÉDITO",
			value: "1",
			iconName: "CreditCard",
		},
		{
			id: "2",
			label: "CARTÃO DE DÉBITO",
			value: "2",
			iconName: "Bank",
		},
		{
			id: "3",
			label: "DINHEIRO",
			value: "3",
			iconName: "Money",
		},
	];

	useEffect(() => {
		setIsLoading(true);
		axios.get("http://localhost:3000/coffees").then((response) => {
			setItemData(response.data);
			setIsLoading(false);
		});
	}, []);

	const handleAddCartProduct = (qty: number, productId: string) => {
		const foundProductIndex = cartProducts.findIndex(
			(product) => product.id === productId
		);

		if (foundProductIndex === -1) {
			setCartProducts((products) => [
				...products,
				{
					id: productId,
					qty: qty,
				},
			]);
		} else {
			const newCartProducts = cartProducts.filter(
				(product) => product.id !== productId
			);
			setCartProducts(newCartProducts);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center w-full p-10">
			<div className="flex flex-col gap-5">
				<Button className="w-32" variant="large">
					LABEL
				</Button>
				<Button className="w-fit" leftIcon="Trash" variant="small">
					REMOVER
				</Button>
				<CartButton />
				<CartButton cartItemsQty={cartProducts.length} />
				<div className="flex flex-row items-center">
					<NumberInput
						onChange={setNumberInputValue}
						min={0}
						max={10}
						className="mr-10"
					/>
					<div>Valor: {numberInputValue}</div>
				</div>
				<div className="flex flex-row items-center">
					<SelectInput
						onChange={setSelectInputValue}
						options={selectInputOptions}
						className="mr-10"
						defaultValue="1"
					/>
					<div>Valor: {selectInputValue}</div>
				</div>
				<div className="flex items-center gap-10">
					<div className="flex flex-col gap-5 w-96">
						<TextField
							onChange={setTextFieldInputValue}
							value={textFieldInputValue}
							optional
						/>
						<TextField onChange={setTextFieldInputValue} />
					</div>
					<div>Valor: {textFieldInputValue}</div>
				</div>
				<div className="mt-5">
					{!isLoading && (
						<ul className="flex flex-row w-full flex-wrap gap-10">
							{itemData?.map((item) => {
								return (
									<li key={item.id}>
										<CatalogItem
											catalogItemInfo={item}
											onAddCartProduct={handleAddCartProduct}
										/>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
