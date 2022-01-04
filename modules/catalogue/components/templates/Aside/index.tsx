import { FC } from "react";

import { AsideLink } from "../../atoms";
import { useAppSelector } from "../../../../../common/hooks/store";

interface AsideProps {
	menuItems: {
		to?: string;
		label: string;
	}[];
}

const Aside: FC<AsideProps> = ({ menuItems }) => {
	const cart = useAppSelector(({ main }) => main.cart);

	return (
		<div className="mx-3 md:ml-4 lg:ml-5 sm:mx-6 h-2/3">
			<aside className="w-full h-full p-10 px-6 lg:sticky top-10 lg:w-360p bg-gradient-to-tr from-purple-500 to-purple-600 rounded-xl lg:mr-4 md:w-64 ">
				<div className="flex flex-col justify-between h-full">
					<div>
						<span className="text-4xl font-medium text-white">
							eat<span className="text-yellow-400">dish._</span>
						</span>

						<div className="flex flex-col mb-20 space-x-2 flex-mt-10 ">
							{menuItems.map((link) => (
								<AsideLink key={link.to} {...link} />
							))}
						</div>
					</div>

					<AsideLink
						to="/cart"
						label={cart.length ? `Cart: ${cart.length} Items` : "Cart is Empty"}
					/>
				</div>
			</aside>
		</div>
	);
};

export default Aside;
