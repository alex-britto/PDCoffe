import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Status, Button, NumberInput } from "../index";
import { Typography } from "../Typography";

interface CatlogItemProps {
  id: number;
  labels: string[];
  img: string;
  title: string;
  description: string;
  price: string;
  max: number;
  onCartClick: (id: number, value: number) => void;
}

export default function CatalogItem({
  description,
  id,
  img,
  labels,
  max,
  price,
  title,
  onCartClick,
}: CatlogItemProps) {
  const theme = useTheme();
  const [value, setValue] = useState(1);
  return (
    <CatalogItemWrapper>
      <img src={img} />
      <LabelContainer>
        {labels.map((label) => (
          <Status text={label} key="label" />
        ))}
      </LabelContainer>
      <Typography
        variant="h4"
        className="mt-4"
        color={theme.colors.base.subtitle}>
        {title}
      </Typography>
      <Typography
        variant="text"
        fontSize="14px"
        color={theme.colors.base.label}
        className="mt-2 text-center">
        {description}
      </Typography>
      <BottomRow>
        <div>
          <Typography fontSize="14px" color={theme.colors.base.text}>
            R$
            <Typography
              variant="text"
              fontSize="24px"
              color={theme.colors.base.text}
              fontFamily="'Baloo 2', cursive"
              fontWeight={800}
              className="pl-1">
              {price}
            </Typography>
          </Typography>
        </div>
        <div>
          <NumberInput
            min={1}
            max={max}
            value={value}
            onChange={setValue}
          />
          <Button
            version="small"
            variant="secondary"
            icon={<ShoppingCart size={18} weight="fill" />}
            onClick={() => onCartClick(id, value)}
          />
        </div>
      </BottomRow>
    </CatalogItemWrapper>
  );
}

const CatalogItemWrapper = styled.div`
  ${({ theme }) => `
  width: 256px;
  height: 310px;
  background-color: ${theme.colors.base.card};
  border-radius: 6px 36px 6px 36px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 120px;
    height: auto;
    width: 100%;
    margin-top: -40px;
  }
  `}
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  gap: 4px;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
  & :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
