/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		domains: ["www.kindpng.com", "www.pngitem.com", "purepng.com"],
	},
};

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async redirects() {
		return [
			{
				destination: "/catalogue",
				permanent: true,
				source: "/",
			},
		];
	},
};
