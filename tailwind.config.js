module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				"1400p": "1400px",
			},
			maxHeight: {
				"800p": "800px",
			},
			width: {
				"550p": "550px",
				"360p": "360px",
			},
		},
		fontFamily: {
			regular: "Gilroy-Regular",
			medium: "Gilroy-Medium",
			light: "Gilroy-Light",
			bold: "Gilroy-Bold",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
