import SelectOption from "./SelectOption"

interface Option {
  value: string
  label: string
  icon?: string
}

interface SelectGroupProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

const SelectGroup = ({ options, value, onChange }: SelectGroupProps) => {
  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <SelectOption
          key={option.value}
          label={option.label}
          isSelected={option.value === value}
          onClick={() => onChange(option.value)}
          icon={option.icon}
          value={option.value}
        />
      ))}
    </div>
  )
}

export default SelectGroup
