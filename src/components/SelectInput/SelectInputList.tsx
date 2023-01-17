import { ReactNode, useState } from "react";
import SelectInputItem from "./SelectInputItem";

export interface SelectInputListProps {
    items: {
        id: string;
        title: string;
        icon: ReactNode;
    }[],
    selectedInputItemDefault?: string;
    onClick?: (e: string) => void;
}

const SelectInputList = ({ items, selectedInputItemDefault, onClick }: SelectInputListProps) => {
    const [selectedInputItemId, setSelectedInputItemId] = useState(selectedInputItemDefault)

    const handleOnClick = (index: string) => {
        setSelectedInputItemId(index)
      !!onClick && onClick(index)
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <SelectInputItem 
                        icon={item.icon}
                        title={item.title}
                        onClick={() => handleOnClick(item.id)}
                        isSelected={item.id === selectedInputItemId}
                        key={item.id}
                    />
                )
                })}
    </div>
    )
}

export default SelectInputList