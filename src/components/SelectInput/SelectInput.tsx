import { Bank, CreditCard, Money } from "phosphor-react"
import { InputHTMLAttributes, ReactNode, useState } from "react"
import styled, { css } from "styled-components"

export interface SelectInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: "credit" | "debt" | "cash"
    icon?: ReactNode
    iconColor?: string
    label?: string
    width?: string | number
    maxWidth?: string | number
    minWidth?: string | number
}

const SelectInput = ({ 
    variant = "credit", 
    icon, 
    label, 
    width, 
    maxWidth, 
    minWidth, 
    iconColor, 
    ...props
} : SelectInputProps) => {
    const [selected, setSelected] = useState(false)
    
    const IconDependsOnVariant = () => {
        if(variant === 'credit') {
            return <CreditCard size={16} color={iconColor} className="mr-3" />
        } else if (variant === 'debt') {
            return <Bank size={16} color={iconColor} className="mr-3" />
        } else {
            return <Money size={16} color={iconColor} className="mr-3" />
        }
    }

    return (
        <Container 
        selected={selected}
        width={width} 
        maxWidth={maxWidth} 
        minWidth={minWidth} 
        onClick={() => setSelected(!selected)}
        {...props}
        >
            {icon && <IconDependsOnVariant />} {label}
        </Container>
    )
}

export default SelectInput

const Container = styled.div<{
    width?: string | number,
    maxWidth?: string | number,
    minWidth?: string | number,
    selected?: boolean
    }>`
       ${({ theme, width, maxWidth, minWidth, selected }) => css`
           display: flex;

           align-items: center;
           justify-content: space-between;

           background: ${theme.colors.base.button};
           color: ${theme.colors.base.text};
           border: 1px solid ${theme.colors.base.button};
           border-radius: 6px;
           padding: 5px 8px;
           
           width: ${typeof width === "number" ? width + "px" : width};
           max-width: ${typeof maxWidth === "number" ? maxWidth + "px" : maxWidth};
           min-width: ${typeof minWidth === "number" ? minWidth + "px" : minWidth};

           align-items: center;
           justify-content: center;
           text-transform: uppercase;
           
           font-family: "Roboto";
           font-size: 12px;

           &:hover {
            background: ${theme.colors.base.hover};
           }

           ${!!selected && `
            border-color: ${theme.colors.purple.default};
            background: ${theme.colors.purple.light};
           `
        }

           cursor: pointer;
       `}
    `