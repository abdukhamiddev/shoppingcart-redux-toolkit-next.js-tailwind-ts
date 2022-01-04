import PageTemplate from "../../common/components/templates/PageTemplate/index";

import { Aside } from "../../modules/catalogue/components/templates";
import { useAppSelector } from "../../common/hooks/store";
import { Product } from "../../modules/catalogue/components/molecules";

export default function Catalogue() {
	const products = useAppSelector(({ main }) => main.products);
	return (
		<PageTemplate title="Dishes">
			<section className="py-4 lg:flex md:flex ">
				<Aside
					menuItems={[
						{ to: "/overview", label: "Overview" },
						{ to: "/recipes", label: "Recipes" },
						{ to: "/favorite", label: "Favorite" },
						{ to: "/community", label: "Community" },
						{ to: "/settings", label: "Settings" },
					]}
				/>
				<section className="w-full p-10 rounded-md ">
					<h1 className="mb-8 text-3xl">Recent Dishes</h1>
					<section className="grid gap-4 lg:gap-8 lg:grid-cols-3 md:grid-cols-2 md:gap-4">
						{products.map((product) => (
							<Product key={product._id} {...product} />
						))}
					</section>
				</section>
			</section>
		</PageTemplate>
	);
}
