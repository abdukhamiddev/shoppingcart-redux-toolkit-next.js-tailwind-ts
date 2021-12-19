import { useAppSelector } from "../../../hooks/store";
import { useMemo } from "react";
import Button from "../../Button";
import Chevron from "../../../../assets/svg/chevron.svg";
import Price from "../../Price";

const SubTotal = () => {
	const products = useAppSelector(({ main }) => main.cart);
	const totalPrice = useMemo(
		() =>
			products
				.map(({ price }) => price.value)
				.reduce((total, x) => total + x, 0),
		[products]
	);

	const handleBack = () => {
		window.history.back();
	};

	return (
		<div>
			<span>
				<Button size="lg" onClick={handleBack} type="secondary">
					<Chevron /> Back to Catalogue
				</Button>
			</span>
			<span>
				Subtotal:
				<Price className="" value={totalPrice} currency="USD" />
			</span>
		</div>
	);
};

export default SubTotal;
