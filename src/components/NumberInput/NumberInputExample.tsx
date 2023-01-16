import { useState } from "react";
import NumberInput from "./NumberInput";

const NumberInputExample = () => {
    const [inputValue, setInputValue] = useState<number>(0)

    return (
        <div className="m-4">
            <NumberInput 
                value={inputValue} 
                onSubtraction={() => setInputValue((inputValue) => inputValue > 0 ? inputValue - 1 : inputValue)} 
                onAddition={() => setInputValue((inputValue) => inputValue + 1)}
            />
        </div>
    )
}

export default NumberInputExample