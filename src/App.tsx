import {
  CatalogItem,
  NumberInput,
  Status,
  Typography,
  TypographyV2,
} from "./components";
import { useState } from "react";
import { useTheme } from "styled-components";

function App() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  //catalog items
  const onCartClick = (id: number, value: number) => {
    console.log({ id, value });
  };

  const catalogItems = [
    {
      id: 1,
      labels: ["Especial", "Alcoólico"],
      img: "/img/irlandes.png",
      title: "Irlandês",
      description:
        "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "6,66",
      max: 5,
    },
    {
      id: 2,
      labels: ["Especial"],
      img: "/img/havaiano.png",
      title: "Havaiano",
      description:
        "Bebida adocicada preparada com café e leite de coco",
      price: "4,00",
      max: 9,
    },
  ];

  return (
    <div className="m-4 w-full flex column">
      <div className="m-4">
        <NumberInput
          value={value}
          onChange={setValue}
          min={0}
          max={9}
        />
      </div>
      <div className="m-4">
        <Status
          text="Tradicional"
          backgroundColor={theme.colors.purple.light}
        />
      </div>
      <div className="m-4">
        <Typography variant="h1">h1</Typography>
        <Typography variant="h1" fontSize="32px">
          h1 com tamanho alterado
        </Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography
          variant="text"
          fontWeight={800}
          color={theme.colors.purple.dark}>
          abaixo só tem typographyv2
        </Typography>

        <TypographyV2 variant="display">Display</TypographyV2>
        <TypographyV2 variant="subDisplay">SubDisplay</TypographyV2>
        <TypographyV2 variant="heading">heading</TypographyV2>
        <TypographyV2 variant="subHeading">subHeading</TypographyV2>
        <TypographyV2 variant="body">body</TypographyV2>
        <TypographyV2 variant="subTitle">subTitle</TypographyV2>
      </div>
      <div className="m-4">
        {catalogItems.map((item) => (
          <div className="m-4" key={item.id}>
            <CatalogItem {...item} onCartClick={onCartClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
