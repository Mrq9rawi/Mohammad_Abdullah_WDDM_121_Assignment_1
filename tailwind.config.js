module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': ['3.5rem', '1'],
			'7xl': '5rem',
		},
		extend: {
			colors: {
				midnight: "#152253"
			}
		},
	},
	plugins: [],
};
