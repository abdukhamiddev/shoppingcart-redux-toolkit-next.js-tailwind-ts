import { useMemo } from "react";

import Chevron from "../../../../../assets/svg/chevron.svg";
import { useAppSelector } from "../../../../../common/hooks/store";
import Button from "../../../../../common/components/Button/index";
import Price from "../../../../../common/components/Price/index";

const Subtotal = () => {
	const products = useAppSelector(({ main }) => main.cart);

	const totalPrice = useMemo(
		() =>
			products
				.map(({ price }) => price?.value)
				.reduce((total, x) => total + x, 0),
		[products]
	);

	const handleBack = () => {
		window.history.back();
	};

	return (
		<div className="">
			<span className="">
				<Button size="lg" onClick={handleBack} type="secondary">
					<Chevron className="mr-2" /> Back to Catalogue
				</Button>
			</span>

			<span className="">
				Subtotal:
				<Price className="" value={totalPrice} currency="USD" />
			</span>
		</div>
	);
};

export default Subtotal;
