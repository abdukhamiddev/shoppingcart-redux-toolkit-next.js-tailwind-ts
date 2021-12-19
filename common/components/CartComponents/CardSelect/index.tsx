import { CreditCard as CreditCardProps } from "../../../types/CreditCard";
import CreditCard from "../CreditCard";

import MasterCardLogo from "../../../../assets/svg/mastercard.svg";

const CardSelect = (cardInfo: CreditCardProps) => {
	return (
		<div>
			<span>Card Type</span>
			<div>
				<CreditCard {...cardInfo} />
				<MasterCardLogo />
			</div>
		</div>
	);
};

export default CardSelect;
