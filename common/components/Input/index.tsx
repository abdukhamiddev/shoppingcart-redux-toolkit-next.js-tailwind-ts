import cn from "classnames";
import { ChangeEvent } from "react";

interface InputProps {
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	className?: string;
	type?: "text" | "number";
}

const Input = ({ placeholder, onChange, type, className }: InputProps) => {
	const containerClasses = cn(
		"relative w-full h-20 input-container",
		className
	);
	return (
		<div className={containerClasses}>
			<input
				type={type}
				onChange={onChange}
				spellCheck={false}
				placeholder={placeholder}
				className="absolute z-50 w-full pt-1 pb-1 text-white bg-transparent border-b border-gray-600"
			/>
			
		</div>
	);
};
export default Input;
