/* eslint-disable @next/next/no-img-element */

import type { CartProduct as ProductProps } from "../../../types/Product";
import { useAppDispatch } from "../../../hooks/store";
import QuantityInput from "../../QuantityInput";
import { ChangeEvent } from "react";
import Price from "../../Price/index";

import {
	decreaseProductQuantity,
	enterProductQuantity,
	increaseProductQuantity,
	removeProductFromCart,
} from "../../../../store/reducers/main";

import CloseIcon from "../../../../assets/svg/close.svg";

const Product = ({ _id, ...product }: ProductProps) => {
	const dispatch = useAppDispatch();

	const handleRemoveProduct = () => dispatch(removeProductFromCart(_id));

	const handleQuantityIncrease = () => dispatch(increaseProductQuantity(_id));
	const handleQuantityDecrease = () => dispatch(decreaseProductQuantity(_id));

	const handleEnterQuantity = ({ target }: ChangeEvent<HTMLInputElement>) => {
		dispatch(enterProductQuantity({ _id, quantity: Number(target.value) }));
	};

	return (
		<div>
			<div>
				<img src={product.photoURL} alt={product.name} className="" />
				<div className="">
					<span>{product.name}</span>
					<span>{_id}</span>
				</div>
			</div>
			<div>
				<QuantityInput
					onIncrease={handleQuantityIncrease}
					onDecrease={handleQuantityDecrease}
					onChange={handleEnterQuantity}
					value={product.quantity}
				/>
			</div>
			<div>
				<Price className="" {...product.price} isSublimed={true} />
				<CloseIcon className="" onClick={handleRemoveProduct} />
			</div>
		</div>
	);
};
