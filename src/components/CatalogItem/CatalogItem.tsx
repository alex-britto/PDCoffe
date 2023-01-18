import { ShoppingCartSimple } from "phosphor-react";
import { HTMLAttributes, ReactNode } from "react"
import styled, { css, useTheme } from "styled-components";
import { NumberInput, Status, Typography, Button } from '../../components'

export interface CatalogItemProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    title: string;
    subtitle: string;
    priceTag: string | number;
    onClick?: () => void
    statusColor: string;
    statusBgColor: string;
    statusText: string;
    typographyColor?: string;
    numberInputValue: number;
    onSubtraction: () => void;
    onAddition: () => void;
}

const CatologItem = ({ 
    icon, 
    title, 
    subtitle, 
    priceTag, 
    onClick, 
    statusColor, 
    statusBgColor, 
    statusText, 
    typographyColor, 
    numberInputValue,
    onSubtraction,
    onAddition, 
    ...rest }: CatalogItemProps) => { 
        const theme = useTheme()

    return (
        <Container onClick={onClick} {...rest}>
            <Content>
            {icon && <span className="mr-3 -mt-10">{icon}</span>}
            <Status color={statusColor} bgColor={statusBgColor} text={statusText} containerProps={{ className: "mt-3" }} />
            {title && <Typography variant="h3" className="mt-4">{title}</Typography>}
            {subtitle && 
            <Typography variant="body" fontColor={typographyColor} className="text-center mt-3 mb-8 subtitle">
                    {subtitle}
            </Typography>}
            <Fragment>
            {priceTag && (
                <Fragment>
                    <Typography variant="subtitle" className="mt-2 mr-1">R$</Typography>
                    <Typography variant="title" className="mr-6">{priceTag}</Typography>
                </Fragment>
            )}
            <NumberInput 
                value={numberInputValue} 
                onSubtraction={onSubtraction}
                onAddition={onAddition}
            />
            <Button 
                icon={<ShoppingCartSimple size={20} weight="fill" color="white" />}
                bgColor={theme.colors.purple.dark}
                bgHoverColor={theme.colors.purple.default}
                textColor={theme.colors.white}
                onClick={() => console.log("comprei")}
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