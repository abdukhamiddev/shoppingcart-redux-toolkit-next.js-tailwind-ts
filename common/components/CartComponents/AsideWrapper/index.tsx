interface AsideWrapperProps {
	title?: string;
	children?: any;
}

const AsideWrapper = ({ children, title }: AsideWrapperProps) => {
	return (
		<aside>
			<section>
				{title && <h1>{title}</h1>}
				<div>{children}</div>
			</section>
		</aside>
	);
};

export default AsideWrapper;
