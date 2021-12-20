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
		<div className="">
			<div className="r">
				<img className="" src={product.photoURL} alt={product.name} />

				<div className="">
					<span className="mb-1">{product.name}</span>
					<span className="">{_id}</span>
				</div>
			</div>

			<div className="">
				<QuantityInput
					onIncrease={handleQuantityIncrease}
					onDecrease={handleQuantityDecrease}
					onChange={handleEnterQuantity}
					value={product.quantity}
				/>
			</div>

			<div className="">
				<Price className="" {...product.price} isSublimed={true} />
				<CloseIcon className="" onClick={handleRemoveProduct} />
			</div>
		</div>
	);
};

export default Product;
