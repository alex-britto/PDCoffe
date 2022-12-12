import { Trash } from "phosphor-react"
import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/themes/defaultTheme"

export interface DeleteButtonProps {
  title: string
  icon: any
  //   pesquisar tipo de icon
}

const DeleteButton = ({ title, icon }: DeleteButtonProps) => {
  return (
    <>
      <StyledDeleteButton className="py-0 px-2 flex items-center">
        {!!icon && (
          <Trash
            size={16}
            weight="light"
            color={defaultTheme.colors.purple.default}
            className="mr-1"
          />
        )}
        {title}
      </StyledDeleteButton>
    </>
  )
}

const StyledDeleteButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
    color: ${theme.colors.base.text};
    border-radius: 6px;

    text-transform: uppercase;
    font-family: "Roboto";
    font-size: 12px;

    width: auto;
    height: 32px;

    &:hover {
      transition: 0.2 ease;
      background-color: ${theme.colors.base.hover};
    }
  `}
`

export default DeleteButton
