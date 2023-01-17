import { ReactNode, useState } from "react";
import SelectInputItem from "./SelectInputItem";

export interface SelectInputListProps {
    items: {
        id: string;
        title: string;
        icon: ReactNode;
    }[],
    selectedInputItemDefault?: string;
    onClick?: (value: string) => void;
}

const SelectInputList = ({ items, selectedInputItemDefault, onClick }: SelectInputListProps) => {
    const [selectedInputItemId, setSelectedInputItemId] = useState(selectedInputItemDefault)

    const handleOnClick = (index: string) => {
      setSelectedInputItemId(index)
      !!onClick && onClick(index)
    }

    return (
    <div className="flex gap-3">
      {items.map((item) => (
        <SelectInputItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          isSelected={item.id === selectedInputItemId}
          onClick={() => handleOnClick(item.id)}
        />
      ))}
    </div>
    )
}

export default SelectInputList