import { TextField } from "../TextField"
import { useState } from "react"

const TextFieldExample = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <TextField 
            placeholder="placeholder" 
            endLabel="endlabel aqui" 
            onChange={(e) => setInputValue(e.target.value)}
            containerProps={{ className: "m-4 w-1/2" }}
        />
    )
}

export default TextFieldExample
