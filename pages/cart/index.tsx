import { useState, ChangeEvent } from "react";
import Input from "../../common/components/Input";
import Select from "../../common/components/Select";
import { PageTemplate } from "../../common/components/templates";
import { useAppSelector } from "../../common/hooks/store";
import { CreditCard } from "../../common/types/CreditCard";
import { cc_format } from "../../common/utils/string";
import { EmptyState, Product } from "../../modules/cart/components/organisms";
import Subtotal from "../../modules/cart/components/organisms/Subtotal/index";
import { MONTH_OPTIONS, YEAR_OPTIONS } from "../../common/constants/Expires";
import Button from "../../common/components/Button/index";
import {
	AsideWrapper,
	CardSelect,
} from "../../modules/cart/components/templates";

export default function Cart() {
	const products = useAppSelector(({ main }) => main.cart);
	const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard);
	const handleCardNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setCreditCard((p) => ({ ...p, name: target.value }));
	};

	const handleCardNumberChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		if (/[0-9]/.test(target.value) || !target.value) {
			target.value = cc_format(target.value);
			setCreditCard((p) => ({ ...p, number: target.value }));
		} else {
			target.value = "";
		}
	};
	const handleMonthChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		setCreditCard((p) => ({
			...p,
			expires: { ...p.expires, month: Number(target.value) },
		}));
	};
	const handleYearChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		setCreditCard((p) => ({
			...p,
			expires: { ...p.expires, year: Number(target.value) },
		}));
	};

	return (
		<PageTemplate title="cart">
			<section>
				<section>
					<h1>Shopping Cart</h1>
					{products.length !== 0 ? (
						<>
							<div>
								{products.map((product) => (
									<Product key={product._id} {...product} />
								))}
							</div>
							<Subtotal />
						</>
					) : (
						<EmptyState />
					)}
					<AsideWrapper title={"Card Details"}>
						<CardSelect {...creditCard} />

						<div className="flex flex-col flex-1">
							<Input
								onChange={handleCardNameChange}
								placeholder="Name on Card"
							/>
							<Input
								onChange={handleCardNumberChange}
								placeholder="Card on Number"
							/>

							<div className="flex justify-between w-full mt-2">
								<div className="relative w-full">
									<span className="absolute text-sm text-gray-400 -top-6">
										Expiration Date
									</span>

									<div className="grid grid-cols-2 gap-3 mt-1.5">
										<Select
											onChange={handleMonthChange}
											options={MONTH_OPTIONS}
											placeholder={"MM"}
										/>
										<Select
											onChange={handleYearChange}
											options={YEAR_OPTIONS}
											placeholder={"YYYY"}
										/>
									</div>
								</div>

								<Input className="ml-10" placeholder={"CVV"} />
							</div>
						</div>

						<Button size="lg">Check Out</Button>
					</AsideWrapper>
				</section>
			</section>
		</PageTemplate>
	);
}
