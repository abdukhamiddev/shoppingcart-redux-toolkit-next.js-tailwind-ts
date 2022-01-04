import { FC } from "react";

interface AsideWrapperProps {
	title?: string;
}

const AsideWrapper: FC<AsideWrapperProps> = ({ children, title }) => {
	return (
		<aside className="sticky top-0 h-full py-10 lg:w-550p md:w-550p">
			<section className="w-full h-full py-10 shadow-xl bg-gradient-to-tr from-gray-700 to-gray-900 rounded-xl px-11">
				{title && <h1 className="text-3xl font-medium text-white">{title}</h1>}

				<div className="flex flex-col">{children}</div>
			</section>
		</aside>
	);
};

export default AsideWrapper;
