import { useAppSelector } from '../../hooks/store';
import AsideLink from './AsideLink/AsideLink';
interface AsideProps {
	menuItems: {
		to?: string;
		label: string;
	}[];
}
const Aside = ({ menuItems }: AsideProps) => {
	const cart = useAppSelector(({ main }) => main.cart);

	return (
		<aside className="h-full ml-4 md:mx-10 lg:sticky top-10 lg:w-360p bg-gradient-to-tr from-purple-500 to-purple-600 rounded-xl">
			<div className='flex flex-col justify-between h-full'>
				<div className='mt-4 ml-8'>
					<span className='text-2xl font-medium text-white lg:text-3xl'>
						eat <span className='text-yellow-400'>dish._</span>
					</span>
					<div className="flex flex-col mt-6 mb-16 space-x-8 md:flex-row lg:flex-col">
						{menuItems.map((link) => (
							<AsideLink key={link.to} {...link} />
						))}
					</div>
				</div>
				<div className='mb-4 ml-8'>
					<AsideLink
						to='/cart'
						label={cart.length ? `Cart:${cart.length}` : 'Cart is Empty'} />
				</div>

			</div>
		</aside>
	);
};

export default Aside;
