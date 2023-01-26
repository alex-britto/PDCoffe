import { ShoppingCartSimple } from "phosphor-react";
import { HTMLAttributes, useState } from "react"
import styled, { css, useTheme } from "styled-components";
import { NumberInput, Status, Typography, Button } from '../../components'

export interface CatalogItemProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    title: string;
    subtitle: string;
    priceTag: number; 
    onCartAdd: (value: number) => void
    typographyColor?: string;
    tags: string[];
}

const CatologItem = ({ 
    imageSrc, 
    title, 
    subtitle, 
    priceTag, 
    onCartAdd, 
    tags,
    typographyColor, 
    ...rest }: CatalogItemProps) => { 
        const theme = useTheme()

        const [inputValue, setInputValue] = useState(0)

    return (
        <Container {...rest}>
            <Content>
            {imageSrc && <img src={imageSrc} className="mr-3 -mt-10" />}
                <ul className="flex gap-2 mt-3">
                {tags.map((tag) => (
                    <li key={tag}>
                    <Status text={tag} containerProps={{ className: "mt-3" }} />
                  </li>
                ))}
              </ul>
            {title && <Typography family="baloo" variant="h3" className="mt-4">{title}</Typography>}
            {subtitle && 
            <Typography family="roboto" variant="caption" fontColor={typographyColor} className="text-center mt-3 mb-8 subtitle">
                    {subtitle}
            </Typography>}
            <Fragment>
            {priceTag && (
                <Fragment>
                    <Typography family="roboto" variant="caption" className="mt-1 mr-1">R$</Typography>
                    <Typography family="baloo" variant="h3" className="mr-6"> 
                        {new Intl.NumberFormat("pt-Br", {
                            minimumFractionDigits: 2,
                            currency: "BRL",
                            }).format(priceTag)}
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
                onClick={() => onCartAdd(inputValue)}
                className="ml-2"
        />
            </Fragment>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background: transparent;
    overflow: hidden;
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

        background: ${theme.colors.base.card};
        border-radius: 6px 32px;

        .subtitle {
            max-width: 216px;
        }
    `}
`

export default CatologItem