/* eslint-disable @next/next/no-img-element */
import { FC, useMemo } from "react";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../../../common/hooks/store";
import {
	addProductToCart,
	removeProductFromCart,
} from "../../../../../store/reducers/main";
import Button from "../../../../../common/components/Button/index";
import Price from "../../../../../common/components/Price/index";
import type { Product as ProductProps } from "../../../../../common/types/Product";

const Product: FC<ProductProps> = (product) => {
	const cart = useAppSelector(({ main }) => main.cart);
	const dispatch = useAppDispatch();

	const isExistsInCart = useMemo(
		() => !!cart.find(({ _id }) => _id === product._id),
		[cart, product._id]
	);

	const handleCartOperations = () => {
		isExistsInCart
			? dispatch(removeProductFromCart(product._id))
			: dispatch(addProductToCart(product._id));
	};

	return (
		<div className="flex flex-col items-center w-full p-5 bg-white rounded-lg shadow-lg">
			<img
				src={product.photoURL}
				className="w-32 h-32 mb-4 rounded-full"
				alt={product.name}
			/>

			<div className="flex justify-between w-full mb-4">
				<span>{product.name}</span>
				<Price {...product.price} />
			</div>

			<Button type="tertiary" onClick={handleCartOperations}>
				{isExistsInCart ? "Remove from Cart" : "Add to Cart"}
			</Button>
		</div>
	);
};

export default Product;
