import { AirplaneTakeoff } from "phosphor-react"
import { HTMLAttributes } from "react"
import styled, { css, useTheme } from "styled-components"
interface TestProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Test = ({ title }: TestProps) => {
  const theme = useTheme()

  return (
    <Container>
      Test component
      <AirplaneTakeoff size={32} color={theme.colors.purple.dark} />
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "my-6 ml-auto items-center rounded",
})`
  ${({ theme }) => css`
    display: flex;
    height: 50px;

    background-color: ${theme.colors.yellow.dark};
    color: white;

    text-align: right;
    font-weight: bold;
    text-decoration: underline;
  `}
`
