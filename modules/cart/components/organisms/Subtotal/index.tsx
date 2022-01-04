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
		<div className="flex flex-col items-center justify-center">
			<div className="pt-2">
				<Button size="lg" onClick={handleBack} type="secondary">
					<Chevron className="mr-2" /> Back to Catalogue
				</Button>
			</div>
			<div className="flex pt-4 space-x-4">
				<h1 className="text-lg font-bold">Subtotal:</h1>
				<Price
					className="text-lg font-semibold text-blue-800"
					value={totalPrice}
					currency="USD"
					isSublimed={false}
				/>
			</div>
		</div>
	);
};

export default Subtotal;
