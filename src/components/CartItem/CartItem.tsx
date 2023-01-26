import { Trash } from "phosphor-react";
import { ReactNode } from "react";
import styled, { css, useTheme } from "styled-components";
import { Button } from "../Button";
import { NumberInput } from "../NumberInput";
import { Typography } from "../Typography";

export interface CartItemProps {
    icon: ReactNode;
    title: string;
    priceTag: string;
    inputValue: number;
    onSubtraction: () => void;
    onAddition: () => void;
    onClickButton: () => void;
}

const CartItem = ({ icon, title, priceTag, inputValue, onSubtraction, onAddition, onClickButton, ...rest }: CartItemProps) => {
    const theme = useTheme()
    return (
        <Container {...rest}>
                {icon && <span className="w-16 h-16 mt-2">{icon}</span>} 
            <Fragment>
                <div>
                {title && <Typography family="roboto" variant="h4" className="mt-2">{title}</Typography>} 
                </div>
                <div className="flex flex-row mt-2">
                <NumberInput value={inputValue} onSubtraction={onSubtraction} onAddition={onAddition} className="mr-2" />
                <Button
                variant="small"
                label="remover"
                bgColor={theme.colors.base.button}
                bgHoverColor={theme.colors.base.hover}
                textColor={theme.colors.base.text}
                icon={
                    <Trash size={16} color={theme.colors.purple.default} />
                }
                onClick={onClickButton}
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