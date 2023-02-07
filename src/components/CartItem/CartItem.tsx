import { Trash } from "phosphor-react";
import { useState } from "react";
import styled, { css, useTheme } from "styled-components";
import { Button } from "../Button";
import { NumberInput } from "../NumberInput";
import { Typography } from "../Typography";

export interface CartItemProps {
    imageSrc: string;
    title: string;
    priceTag: string;
    onRemoveClick: (value: number) => void;
}

const CartItem = ({ imageSrc, title, priceTag, onRemoveClick, ...rest }: CartItemProps) => {
    const theme = useTheme()

    const [inputValue, setInputValue] = useState(0)

    return (
        <Container {...rest}>
                {imageSrc && <img src={imageSrc} className="w-16 h-16 mt-2" />} 
            <Fragment>
                <div>
                {title && <Typography family="roboto" variant="h4" className="mt-2">{title}</Typography>} 
                </div>
                <div className="flex flex-row mt-2">
                <NumberInput 
                    value={inputValue} 
                    onSubtraction={() => setInputValue((inputValue) => inputValue > 0 ? inputValue - 1 : inputValue)} 
                    onAddition={() => setInputValue((inputValue) => inputValue + 1)} 
                />
                <Button
                variant="small"
                label="remover"
                bgColor={theme.colors.base.button}
                bgHoverColor={theme.colors.base.hover}
                textColor={theme.colors.base.text}
                icon={
                    <Trash size={16} color={theme.colors.purple.default} />
                }
                onClick={() => onRemoveClick(inputValue)}
                className="ml-2" 
                />
                </div>
                </Fragment>
                {priceTag && <Typography family="roboto" variant="h4Bold" className="mt-2 mr-0.5">{priceTag}</Typography>}
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        padding: 8px 6px;
        gap: 32px;

        width: fit-content;

        background: ${theme.colors.base.card};
    ` }
`

const Fragment = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: flex-start;

    width: auto;
`

export default CartItem