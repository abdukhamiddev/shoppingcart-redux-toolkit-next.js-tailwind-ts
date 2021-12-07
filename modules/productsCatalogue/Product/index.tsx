/* eslint-disable @next/next/no-img-element */
import type { Product as ProductProps } from '../../../common/types/Product';
import { useAppSelector, useAppDispatch } from '../../../common/hooks/store';
import { useMemo } from 'react';
import Price from '../../../common/components/Price/index';
import Image from 'next/image';
import {
	addProductToCart,
	removeProductFromCart,
} from '../../../store/reducers/main';
import Button from '../../../common/components/Button';

const Product = (product: ProductProps) => {
	const cart = useAppSelector(({ main }) => main.cart);
	const dispatch = useAppDispatch();

	const isExistOnCart = useMemo(
		() => !!cart.find(({ _id }) => _id === product._id),
		[cart, product._id]
	);

	const handleCartOperations = () => {
		isExistOnCart
			? dispatch(removeProductFromCart(product._id))
			: dispatch(addProductToCart(product._id));
	};

	return (
		<div className='flex flex-col items-center p-5 bg-white rounded-lg shadow-lg md:w-56 lg:w-full'>
			<Image
				alt={product?.name}
				src={product.photoURL}
				width={150}
				height={200}
				className='object-contain'
			/>
			<div className='flex justify-between w-full mb-4 cursor-pointer'>
				<span className='font-bold'>{product.name}</span>
				<Price {...product.price} className='font-medium' />
			</div>
			<Button type='tertiary' onClick={handleCartOperations} >
				{isExistOnCart ? 'Remove from Cart' : 'Add to Cart'}
			</Button>
		</div>
	);
};
export default Product;
