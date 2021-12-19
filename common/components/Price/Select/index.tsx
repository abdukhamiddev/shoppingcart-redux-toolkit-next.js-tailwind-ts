import { ChangeEvent } from 'react';
interface SelectProps {
    onChange?: (event: ChangeEvent<HTMLElement>) => void
    options: { label: string, value: string | number }[]
    placeholder: string

}

const Select = ({ options, onChange, placeholder }: SelectProps) => {
    return (


        <select className='' onChange={onChange}>

            {placeholder && (
                <option value='' disabled selected>{placeholder}</option>
            )
            }
            {options.map((label, value) => {
                <option key={value} value={value}>
                    {label}
                </option>
            })}
        </select >
    )
}
export default Select