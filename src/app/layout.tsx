'use client';

import './globals.css';
import Script from "next/script";
import AuthContext from "../context/authContext";
import {RecoilRoot} from "recoil";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

export default function RootLayout({children}: { children: React.ReactNode }) {
	const router = usePathname().split('/')[1];
	return (
		<html lang="ko">
		<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
		{/*<Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"/>*/}
		<body className="bg-[#f5f5f5] flex h-full justify-center items-center m-auto">
		<AuthContext>
			<RecoilRoot>
				{children}
			</RecoilRoot>
		</AuthContext>
		</body>
		</html>
	);
}
