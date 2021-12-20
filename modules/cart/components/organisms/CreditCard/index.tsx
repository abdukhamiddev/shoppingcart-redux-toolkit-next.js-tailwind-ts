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
		<div onClick={() => console.log(formattedNumber)} className="">
			<VisaLogo className="" />

			<div className="">
				{formattedNumber.map((part, idx) => (
					<span key={idx}>{part}</span>
				))}
			</div>

			<div className="">
				<span className="">{name || "Unknown"}</span>

				<span>
					{expires?.month ?? "MM"}/
					{expires?.year ? String(expires.year).slice(2) : "YY"}
				</span>
			</div>
		</div>
	);
};

export default CreditCard;
