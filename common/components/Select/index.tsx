import { ChangeEvent } from "react";
interface SelectProps {
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
	options: { label: string; value: string | number }[];
	placeholder: string;
}

const Select = ({ options, onChange, placeholder }: SelectProps) => {
	return (
		<select
			className="w-full pt-1 pb-1 text-white bg-transparent border-b border-gray-600"
			onChange={onChange}
		>
			{placeholder && (
				<option value="" disabled selected>
					{placeholder}
				</option>
			)}
			{options.map(({ label, value }) => (
				<option key={value} value={value} className="text-black">
					{label}
				</option>
			))}
		</select>
	);
};
export default Select;
