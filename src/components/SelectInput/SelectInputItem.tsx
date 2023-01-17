import { HTMLAttributes, ReactNode } from "react"
import styled, { css } from "styled-components"

export interface SelectInputItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: ReactNode;
    isSelected: boolean;
}

const SelectInputItem = ({ 
    icon, 
    title, 
    isSelected = false,
    ...rest
} : SelectInputItemProps) => {

    return (
        <Container 
        isSelected={isSelected}
        {...rest}
        >
            {icon} {title}
        </Container>
    )
}

export default SelectInputItem

const Container = styled.div<{ isSelected?: boolean }>`
       ${({ theme, isSelected }) => css`
           display: flex;

           align-items: center;
           justify-content: space-between;

           background: ${theme.colors.base.button};
           color: ${theme.colors.base.text};
           border: 1px solid ${theme.colors.base.button};
           border-radius: 6px;
           padding: 16px;
           
           width: fit-content;

           align-items: center;
           justify-content: center;
           text-transform: uppercase;
           
           font-family: "Roboto";
           font-size: 12px;

           &:hover {
            background: ${theme.colors.base.hover};
           }

           ${!!isSelected && `
            border-color: ${theme.colors.purple.default};
            background: ${theme.colors.purple.light};
           `
        }

           cursor: pointer;
       `}
    `