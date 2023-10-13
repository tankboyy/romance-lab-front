'use client';

import './globals.css';
import Script from "next/script";
import AuthContext from "../context/authContext";

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="ko">
		<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
		{/*<Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"/>*/}
		<body className="bg-[#f5f5f5] flex h-full justify-center items-center m-auto">
		<AuthContext>
			{children}
		</AuthContext>
		</body>
		</html>
	);
}
