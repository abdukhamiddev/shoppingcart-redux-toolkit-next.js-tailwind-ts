import { FC } from "react";

import { CreditCard as CreditCardProps } from "../../../../../common/types/CreditCard";
import { CreditCard } from "../../organisms";

import MasterCardLogo from "../../../../../assets/svg/mastercard.svg";

const CardSelect: FC<CreditCardProps> = (cardInfo) => {
	return (
		<div className="mt-8">
			<span className="">Card Type</span>
			<div className="">
				<CreditCard {...cardInfo} />

				<MasterCardLogo className="" />
			</div>
		</div>
	);
};

export default CardSelect;
