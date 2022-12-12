import styled, { css } from "styled-components"

export interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <>
      <StyledButton className="py-2 px-3">{title}</StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow.default};
    color: ${theme.colors.white};
    border: none;
    border-radius: 6px;

    text-transform: uppercase;
    font-family: "Roboto";

    width: 100%;
    transition: 0.2s;

    &:hover {
      background-color: ${theme.colors.yellow.dark};
      transition: 0.2s ease;
    }
  `}
`

export default Button
