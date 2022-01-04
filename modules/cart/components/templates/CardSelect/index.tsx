import { FC } from "react";

import { CreditCard as CreditCardProps } from "../../../../../common/types/CreditCard";
import { CreditCard } from "../../organisms";

import MasterCardLogo from "../../../../../assets/svg/mastercard.svg";

const CardSelect: FC<CreditCardProps> = (cardInfo) => {
	return (
		<div className="mt-8">
			<span className="text-gray-400">Card Type</span>
			<div className="relative grid w-full grid-cols-1 mt-5 mb-10 h-52 lg:items-center lg:h-48">
				<CreditCard {...cardInfo} />

				<MasterCardLogo className="relative z-10 transition-opacity cursor-pointer w-28 opacity-70 hover:opacity-100 bg-slate-100 lg:absolute lg:-right-14" />
			</div>
		</div>
	);
};

export default CardSelect;
