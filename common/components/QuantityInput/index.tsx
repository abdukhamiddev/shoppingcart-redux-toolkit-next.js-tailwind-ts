import { ChangeEvent } from 'react';
interface QuantityInputProps {
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onIncrease: () => void
    onDecrease: () => void
}
const QuantityInput = ({ value, onIncrease, onDecrease, onChange }: QuantityInputProps) => {
    return <div>
        <button>-</button>
        <input type="number" className='' onChange={onChange} value={value} />
        <button>+</button>
    </div>
}
export default QuantityInput