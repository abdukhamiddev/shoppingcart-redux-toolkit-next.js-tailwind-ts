import { ReactNode } from "react";
import Head from "next/head";

interface PageTemplateProps {
	title: string;
	description?: string;
	keywords?: string[];
	children: ReactNode;
}
const PageTemplate = ({
	title,
	description,
	keywords,
	children,
}: PageTemplateProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} key="title" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta content="initial-scale=1.0" name="viewport" />

				{description && <meta name="description" content={description} />}
				{keywords && <meta name="description" content={keywords.join(",")} />}
			</Head>
			<main>{children}</main>
		</>
	);
};
export default PageTemplate;
