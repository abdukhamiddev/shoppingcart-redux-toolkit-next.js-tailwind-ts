import cn from "classnames";
import { Children, ReactNode } from "react";

interface ButtonProps {
	type?: "primary" | "secondary" | "tertiary";
	htmlType?: "button" | "submit";
	size?: "md" | "lg";
	className?: "string";
	onClick?: () => void;
	children: ReactNode;
}
const Button = ({
	htmlType = "button",
	type = "primary",
	size = "md",
	onClick,
	className,
	children,
}: ButtonProps) => {
	const buttonClasses = cn(
		"w-full bg-gradient-to-tr  flex font-sans font-extralight items-center justify-center text-white flex",
		"rounded-md shadow-sm transition-opacity hover:opacity-90",
		{
			"py-2.5 mx-2 text-lg": size === "lg",
			"py-2 mx-1 text-md": size === "md",
		},

		{
			"from-blue-600 to-blue-700": type === "primary",
			"from-gray-600 to-gray-700": type === "secondary",
			"from-purple-600 to-purple-700": type === "tertiary",
		},
		className
	);
	return (
		<button onClick={onClick} type={htmlType} className={buttonClasses}>
			{children}
		</button>
	);
};
export default Button;
