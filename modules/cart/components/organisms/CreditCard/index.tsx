import { FC, useMemo } from "react";
import { CreditCard as CreditCardProps } from "../../../../../common/types/CreditCard";
import VisaLogo from "../../../../../assets/svg/visa.svg";

const placeholder = "●●●●  ●●●●  ●●●●  ●●●●";

const CreditCard: FC<CreditCardProps> = ({ number, name, expires }) => {
	const formattedNumber = useMemo(
		() =>
			number
				? Array.from(placeholder)
						.map((_, idx) => (number[idx] ? number[idx] : placeholder[idx]))
						.join("")
						.split("  ")
				: Array.from(placeholder).join("").split("  "),
		[number]
	);

	return (
		<div
			onClick={() => console.log(formattedNumber)}
			className="absolute flex flex-col justify-between w-full h-48 px-5 text-white rounded-lg shadow-2xl -left-24 bg-gradient-to-tr from-blue-500 to-blue-800 py-7"
		>
			<VisaLogo className="h-10 bg-white rounded-lg shadow-lg" />

			<div className="flex items-center justify-between">
				{formattedNumber.map((part, idx) => (
					<span key={idx}>{part}</span>
				))}
			</div>

			<div className="flex items-center justify-between">
				<span className="mr-4 truncate">{name || "Unknown"}</span>

				<span>
					{expires?.month ?? "MM"}/
					{expires?.year ? String(expires.year).slice(2) : "YY"}
				</span>
			</div>
		</div>
	);
};

export default CreditCard;
