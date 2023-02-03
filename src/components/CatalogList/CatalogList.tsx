import { useEffect, useState } from "react"
import { api } from "../../services"
import { CatalogItem, TypographyV2 } from "../index"

//QUAL O MELHOR LOCAL/ARQUIVO PARA COLAR AS INTERFACES?
interface ICoffeeItem {
  id: number
  imageSrc: string
  title: string
  description: string
  tags: string[]
  price: number
}

interface CatalogListProps {
  list?: ICoffeeItem[]
  routePath?: string // ?
  totalSelectedItems?: number
  onTotalSelectedItemsChange: (e: number) => void
}

export const CatalogList = ({
  list,
  routePath,
  onTotalSelectedItemsChange,
}: CatalogListProps) => {
  const [totalItems, setTotalItems] = useState(0)
  const [data, setData] = useState<ICoffeeItem[]>()
  const [isDataLoading, setIsDataLoading] = useState<boolean>()
  const getData = async () => {
    setIsDataLoading(true)
    try {
      const response = await api.get("/coffees")
      setData(response.data)
    } catch (err) {
      console.log(err.message)
      console.log("DEU RUIM")
    } finally {
      setIsDataLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    onTotalSelectedItemsChange(totalItems)
  }, [totalItems])
  return (
    <>
      {isDataLoading ? (
        <TypographyV2 variant="h1" family="header">
          CARREGANDO...
        </TypographyV2>
      ) : (
        <div className="flex gap-4 m-8">
          <TypographyV2 variant="h1" family="header">
            {totalItems}
          </TypographyV2>
          {!!data &&
            data.map((item) => {
              return (
                <CatalogItem
                  key={item?.id}
                  imageSrc={item?.imageSrc}
                  title={item?.title}
                  tags={item?.tags}
                  description={item?.description}
                  price={item?.price}
                  onCartClick={(e) => setTotalItems((prev) => prev + e)}
                />
              )
            })}
        </div>
      )}
    </>
  )
}
