/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC } from "react";
import {
	decreaseProductQuantity,
	enterProductQuantity,
	increaseProductQuantity,
	removeProductFromCart,
} from "../../../../../store/reducers/main";
import { QuantityInput } from "../../molecules";
import Price from "../../../../../common/components/Price/index";
import CloseIcon from "../../../../../assets/svg/close.svg";
import { useAppDispatch } from "../../../../../common/hooks/store";
import { CartProduct as ProductProps } from "../../../../../common/types/Product";

const Product: FC<ProductProps> = ({ _id, ...product }) => {
	const dispatch = useAppDispatch();

	const handleRemoveProduct = () => dispatch(removeProductFromCart(_id));

	const handleQuantityIncrease = () => dispatch(increaseProductQuantity(_id));
	const handleQuantityDecrease = () => dispatch(decreaseProductQuantity(_id));

	const handleEnterQuantity = ({ target }: ChangeEvent<HTMLInputElement>) => {
		dispatch(enterProductQuantity({ _id, quantity: Number(target.value) }));
	};

	return (
		<div className="grid items-center w-full grid-cols-3 py-4 border-b">
			<div className="flex items-center">
				<img
					className="rounded-full w-36 h-36"
					src={product.photoURL}
					alt={product.name}
				/>

				<div className="flex flex-col ml-4">
					<span className="mb-1">{product.name}</span>
					<span className="text-sm text-gray-400">{_id}</span>
				</div>
			</div>

			<div className="flex justify-center">
				<QuantityInput
					onIncrease={handleQuantityIncrease}
					onDecrease={handleQuantityDecrease}
					onChange={handleEnterQuantity}
					value={product.quantity}
				/>
			</div>

			<div className="flex justify-between">
				<Price className="text-lg" {...product.price} isSublimed={false} />
				<CloseIcon
					className="transition-opacity opacity-50 cursor-pointer hover:opacity-100"
					onClick={handleRemoveProduct}
				/>
			</div>
		</div>
	);
};

export default Product;
