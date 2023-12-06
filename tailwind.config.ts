import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/_component/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': {
						// opacity: '0',
						transform: 'translateY(100%)'
					},
					'100%': {
						// opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'transition': {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					}
				},
				'transition2': {
					from: {
						opacity: '1',
					},
					to: {
						opacity: '0',
					}
				},
				'rotation': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'fadeIn': 'fade-in 0.5s ease-out',
				'transition': 'transition 0.5s ease-out',
				'transition2': 'transition2 0.5s ease-in',
				'rotation': 'rotation 1s linear infinite',
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
				'image': '4px 4px 4px rgba(0, 0, 0, 0.10)',
				'map-modal': '0px 0px 8px 0px rgba(0, 0, 0, 0.10);'
			},
			colors: {
				'modal-bg': 'rgba(255, 255, 255, 0.80)'
			}
		},
	},
	plugins: [],
	mode: 'jit',
};
export default config;
