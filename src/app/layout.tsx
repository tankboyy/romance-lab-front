'use client';

import './globals.css';
import Script from "next/script";
import {RecoilRoot} from "recoil";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import AuthContext from "../context/authContext";

export default function RootLayout({children}: { children: React.ReactNode }) {
	const router = usePathname().split('/')[1];
	return (
		<html lang="ko">

		<body
			className="bg-[#f5f5f5]"
		>

		<AuthContext>
			<RecoilRoot>
				{children}
			</RecoilRoot>
		</AuthContext>
		</body>
		</html>
	);
}
