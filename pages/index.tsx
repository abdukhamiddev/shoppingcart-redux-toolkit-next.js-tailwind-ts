import { useAppSelector } from '../common/hooks/store';
import PageTemplate from '../common/components/templates/PageTemplate/index';
import Aside from '../common/components/Aside/Aside';
import Product from '../modules/productsCatalogue/Product/index';
export default function Catalogue() {
	const products = useAppSelector(({ main }) => main.products);
	return (
		<PageTemplate title='Dishes'>
			<section className='block w-full py-4 lg:flex'>
				<Aside
					menuItems={[
						{ to: '#', label: 'Overview' },
						{ to: '#', label: 'Recipes' },
						{ to: '#', label: 'Favorite' },
						{ to: '#', label: 'Community' },
						{ to: '#', label: 'Setting' },
					]}
				/>
				<section className='w-full p-10 rounded-md '>
					<h1 className='mb-8 text-3xl'>Recent Dishes</h1>
					<section className='grid lg:gap-8 lg:grid-cols-3 md:grid-cols-3 md:gap-4'>
						{products.map((product) => (
							<Product key={product._id} {...product} />
						))}
					</section>
				</section>
			</section>
		</PageTemplate>
	);
}
