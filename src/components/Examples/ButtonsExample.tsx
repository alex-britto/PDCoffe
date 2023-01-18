import { ShoppingCartSimple, Trash } from "phosphor-react"

import { defaultTheme } from "../../styles/themes/defaultTheme"
import Button from "../Button/Button"

const ButtonsExample = () => {
  return (
    <>
      <div>
        <Button 
          label="Botão simples"
          bgColor={defaultTheme.colors.yellow.default}
          bgHoverColor={defaultTheme.colors.yellow.dark}
          textColor={defaultTheme.colors.white}
          onClick={() => console.log("click botão simples")}
          className="m-4"
          />
          </div>
          <div>
        <Button 
          icon={<ShoppingCartSimple size={20} weight="fill" color="white" />}
          bgColor={defaultTheme.colors.purple.dark}
          bgHoverColor={defaultTheme.colors.purple.default}
          textColor={defaultTheme.colors.white}
          onClick={() => console.log("comprei")}
          className="m-4"
        />
        </div>
        <div>
          <Button
            variant="small"
            label="remover"
            bgColor={defaultTheme.colors.base.button}
            bgHoverColor={defaultTheme.colors.base.hover}
            textColor={defaultTheme.colors.base.text}
            icon={
              <Trash size={16} color={defaultTheme.colors.purple.default} />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
          </div>
          <div>
          <Button
            bgColor={defaultTheme.colors.yellow.light}
            badgeColor={defaultTheme.colors.yellow.dark}
            icon={
              <ShoppingCartSimple
                size={22}
                color={defaultTheme.colors.yellow.dark}
              />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
          </div>
          <div>
          <Button
            bgColor={defaultTheme.colors.yellow.light}
            badgeColor={defaultTheme.colors.yellow.dark}
            itemsQuantity={3}
            icon={
              <ShoppingCartSimple
                size={22}
                color={defaultTheme.colors.yellow.dark}
              />
            }
            onClick={() => console.log("test")}
            className="m-4"
          />
          </div>
          </>
  )
}

export default ButtonsExample