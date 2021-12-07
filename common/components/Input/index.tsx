import { ChangeEvent } from "react";

interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    type?: "text" | "number"
}

const Input = ({ placeholder, onChange, type, className }: InputProps) => {
    return (
        <div>
            <input type={type} onChange={onChange} spellCheck={false} placeholder="" />
            <span>
                {placeholder}
            </span>
        </div>
    )

}
export default Input