import { ShoppingCartSimple } from "phosphor-react";
import { HTMLAttributes, useState } from "react"
import styled, { css, useTheme } from "styled-components";
import { NumberInput, Status, Typography, Button } from '../../components'
import { TypographyProps } from "../Typography/Typography";

export interface CoffeeProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    typeTags: string[]
}

export interface CatalogItemProps extends HTMLAttributes<HTMLDivElement> {
    coffee: CoffeeProps;
    onCartAdd: (coffee: CoffeeProps, quantity: number) => void
    typographyProps?: TypographyProps;
}

const CatologItem = ({ 
    coffee,
    onCartAdd, 
    typographyProps,
    ...rest }: CatalogItemProps) => { 
        const theme = useTheme()

        const [inputValue, setInputValue] = useState<number>(1)

        const { title, id, description, imageUrl, price, typeTags } = coffee

        const handleCartClick = () => {
            onCartAdd(coffee, inputValue)
        }

    return (
        <Container {...rest}>
            <Content>
            {coffee.imageUrl && <img src={imageUrl} className="mr-3 -mt-10" />}
                <StatusContainer>
                    <ul className="flex gap-2 mt-3">
                        {typeTags.map((tag) => (
                            <li key={tag}>
                            <Status text={tag} containerProps={{ className: "mt-3" }} />
                        </li>
                        ))}
                    </ul>
                </StatusContainer>
            {title && <Typography family="baloo" variant="h3" className="mt-4">{title}</Typography>}
            {description && 
            <Typography family="roboto" variant="caption" {...typographyProps} fontColor={theme.colors.base.label} className="text-center mt-3 mb-8 subtitle">
                    {description}
            </Typography>}
            <Fragment>
            {price && (
                <Fragment>
                    <Typography family="roboto" variant="caption" className="mt-1 mr-1">R$</Typography>
                    <Typography family="baloo" variant="h3" className="mr-6"> 
                        {new Intl.NumberFormat("pt-Br", {
                            minimumFractionDigits: 2,
                            currency: "BRL",
                            }).format(price)}
                    </Typography>
                </Fragment>
            )}
            <NumberInput 
                value={inputValue} 
                onSubtraction={() => setInputValue((inputValue) => inputValue > 0 ? inputValue - 1 : inputValue)}
                onAddition={() => setInputValue((inputValue) => inputValue + 1)}
            />
            <Button 
                icon={<ShoppingCartSimple size={20} weight="fill" color="white" />}
                bgColor={theme.colors.purple.dark}
                bgHoverColor={theme.colors.purple.default}
                textColor={theme.colors.white}
                onClick={handleCartClick}
                className="ml-2"
        />
            </Fragment>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background: transparent;
    width: 256px;
`

const StatusContainer = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 4px;
    width: 100%;
`

const Fragment = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        position: relative;

        align-items: center;
        justify-content: flex-start;

        width: auto;

        margin-top: 20px;
        padding: 20px;

        max-height: 342px;

        background: ${theme.colors.base.card};
        border-radius: 6px 32px;

        .subtitle {
            max-width: 216px;
        }
    `}
`

export default CatologItem