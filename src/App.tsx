import { useState } from "react";
import Button from "./shared/components/Button";
import CartButton from "./shared/components/CartButton";
import NumberInput from "./shared/components/NumberInput";
import SelectInput, { SelectOptionType } from "./shared/components/SelectInput";
import TextField from "./shared/components/TextField";

function App() {
	const [numberInputValue, setNumberInputValue] = useState<number>();
	const [selectInputValue, setSelectInputValue] = useState<string>();

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

	return (
		<div className="flex flex-col justify-center items-center w-full h-screen mb-5">
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
					/>
					<div>Valor: {selectInputValue}</div>
				</div>
				<TextField />
			</div>
		</div>
	);
}

export default App;
