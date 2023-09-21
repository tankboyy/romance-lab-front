'use client';

import './globals.css';
import Script from "next/script";
import localFont from "next/font/local";

const fonts = localFont({
	src: [
		{
			path: '../../public/fonts/NanumSquareL.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NanumSquareR.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NanumSquareB.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NanumSquareEB.ttf',
			weight: '900',
			style: 'normal',
		},
	],
});


export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="ko"
					className={fonts.className}
		>
		<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
		<body
			className="bg-[#f5f5f5] flex h-full justify-center items-center m-auto"
		>

		{children}
		</body>
		</html>
	);
}