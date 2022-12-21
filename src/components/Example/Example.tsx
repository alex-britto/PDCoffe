import { AirplaneTakeoff } from "phosphor-react"
import styled, { css } from "styled-components"
import { Item } from "./Item"
import { defaultTheme } from "../../styles/themes/defaultTheme"

interface ExampleProps {
  title?: string
}

export const Example = ({ title }: ExampleProps) => {
  return (
    <Container className="my-6 ml-auto items-center">
      <Item />
      <AirplaneTakeoff size={32} color={defaultTheme.colors.purple.dark} />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 50px;

    color: white;
    background-color: ${theme.colors.yellow.dark};

    text-align: right;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      background-color: #826551;
    }
  `}
`
