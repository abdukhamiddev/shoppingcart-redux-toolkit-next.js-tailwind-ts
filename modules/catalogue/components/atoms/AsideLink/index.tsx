import { FC } from "react";
import Link from "next/link";

interface AsideLinkProps {
	label: string;
	to?: string;
}

const AsideLink: FC<AsideLinkProps> = ({ to = "#", label }) => {
	return (
		<Link href={to}>
			<a className="mb-5 font-light text-white transition-opacity lg:text-2xl opacity-80 hover:opacity-100">
				{label}
			</a>
		</Link>
	);
};

export default AsideLink;
