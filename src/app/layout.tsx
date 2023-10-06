'use client';

import './globals.css';
import Script from "next/script";

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="ko">
		<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
		<body className="bg-[#f5f5f5] flex h-full justify-center items-center m-auto">
		{children}
		</body>
		</html>
	);
}
