import styled, { css } from "styled-components"
import { AirplaneTakeoff } from "phosphor-react"
import { defaultTheme } from "../../styles/themes/defaultTheme"

interface TestProps {
  title?: string
}

export const Test = ({ title }: TestProps) => {
  return (
    <Container className="my-6 ml-auto items-center">
      Test component
      <AirplaneTakeoff size={32} color={defaultTheme.colors.purple.default} />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 50px;

    background-color: ${theme.colors.yellow.dark};
    color: white;

    text-align: right;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      background-color: ${theme.colors.base.hover};
    }
  `}
`
