import { useTheme } from "styled-components"
import { Status } from "../Status"

const StatusExample = () => {
    const theme = useTheme()
    return (
        <Status text="Tradicional" containerProps={{ className: "m-4" }} />
    )
}

export default StatusExample