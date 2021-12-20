import { FC } from "react";

import { CreditCard as CreditCardProps } from "../../../../../common/types/CreditCard";
import { CreditCard } from "../../organisms";

import MasterCardLogo from "../../../../../assets/svg/mastercard.svg";

const CardSelect: FC<CreditCardProps> = (cardInfo) => {
	return (
		<div className="mt-8">
			<span className="text-gray-400">Card Type</span>
			<div className="relative flex items-center w-full h-48 mt-5 mb-10">
				<CreditCard {...cardInfo} />

				<MasterCardLogo className="absolute transition-opacity cursor-pointer w-28 -right-12 opacity-70 hover:opacity-100" />
			</div>
		</div>
	);
};

export default CardSelect;
