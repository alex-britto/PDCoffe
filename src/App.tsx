import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./shared/components/Button";
import CartButton from "./shared/components/CartButton";
import CatalogItem, { CatalogItemInfo } from "./shared/components/CatalogItem";
import { Loader } from "./shared/components/Loader";
import NumberInput from "./shared/components/NumberInput";
import SelectInput, { SelectOptionType } from "./shared/components/SelectInput";
import TextField from "./shared/components/TextField";

interface CartProduct {
	id: string;
	qty: number;
}

function App() {
	const [numberInputValue, setNumberInputValue] = useState<number>(1);
	const [selectInputValue, setSelectInputValue] = useState<string>("0");
	const [textFieldInputValue, setTextFieldInputValue] = useState<string>();
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState<CatalogItemInfo[]>();
	const [cartProductsList, setCartProductsList] = useState<CartProduct[]>([]);

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
		const timeout = setTimeout(() => {
			axios
				.get("http://localhost:3000/coffees")
				.then((response) => {
					setProducts(response.data);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	const handleAddCartProduct = (qty: number, productId: string) => {
		const foundProductIndex = cartProductsList.findIndex(
			(product) => product.id === productId
		);

		if (foundProductIndex === -1) {
			setCartProductsList((products) => [
				...products,
				{
					id: productId,
					qty: qty,
				},
			]);
		} else {
			window.alert("Produto já adicionado ao carrinho");
		}
	};

	return (
		<div className="flex flex-col w-full p-10">
			<div className="flex flex-col gap-5">
				<Button className="w-32" variant="large">
					LABEL
				</Button>
				<Button className="w-fit" leftIcon="Trash" variant="small">
					REMOVER
				</Button>
				<CartButton />
				<CartButton cartItemsQty={5} />
				<div className="flex flex-row items-center">
					<NumberInput
						value={numberInputValue}
						onChange={setNumberInputValue}
						min={1}
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
					<div className="h-20 flex gap-5">
						<CartButton
							cartItemsQty={cartProductsList.length}
							onClick={() => console.log({ cartProductsList })}
						/>
						<Button onClick={() => setCartProductsList([])}>
							Limpar Carrinho
						</Button>
					</div>
					{isLoading ? (
						<div className="w-full flex justify-center items-center">
							<Loader />
						</div>
					) : (
						<ul className="flex flex-row w-full flex-wrap gap-10">
							{products?.map((item) => {
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
