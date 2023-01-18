import { AirplaneTilt, ShoppingCart } from "phosphor-react";
import Button from "./shared/components/Button";
import defaultTheme from "./styles/themes/defaultTheme";

function App() {
	return (
		<div className="flex flex-col justify-center items-center w-full h-screen mb-5">
			<div className="flex flex-row gap-5 ">
				<AirplaneTilt size={36} color="#3129a8" />
				<ShoppingCart size={36} color={defaultTheme.colors.yellow.dark} />
			</div>
			<h1 className="text-3xl font-bold underline"> HELLO WORLD</h1>
			<h1 className="text-3xl font-bold underline mb-5">PDCoffee</h1>
			<div className="flex flex-col gap-5">
				<Button className="w-32" variant="large">
					LABEL
				</Button>
				<Button className="w-fit" leftIcon="Trash" variant="small">
					REMOVER
				</Button>
			</div>
		</div>
	);
}

export default App;
