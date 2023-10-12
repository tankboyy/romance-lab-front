import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'fadeIn': 'fade-in 1s ease-out'
			},
			fontFamily: {
				Mjo: ['Nanum Myeongjo', "sans-serif"]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'login': '4px 4px 4px 0px rgba(0, 0, 0, 0.03)',
				'timeline': '4px 4px 4px 0px rgba(0, 0, 0, 0.05)',
				'map': '0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
			}
		},
	},
	plugins: [],
	mode: 'jit',
};
export default config;
