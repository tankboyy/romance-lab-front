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
				<div
					className="z-50 border-t-[1px] p-0 border-[#E2E2E2] border-solid mx-auto fixed bottom-0 left-0 right-0 max-w-[420px] h-[50px] text-[11px] bg-white">
					<div className="flex justify-between py-[17px] px-[20px] leading-[16px]">
						<Link href="/">
							<p className={router === "" ? "underline" : "text-[#AAA] cursor-pointer"}
							>메인페이지</p>
						</Link>
						<Link href="/analyze">
							<p className={router === "analyze" ? "underline" : "text-[#AAA] cursor-pointer"}
							>분석하기</p>
						</Link>
						<Link href="/timeline">
							<p className={router === "timeline" ? "underline" : "text-[#AAA] cursor-pointer"}
							>타임라인</p>
						</Link>
						<Link href="/mypage">
							<p className={router === "mypage" ? "underline" : "text-[#AAA] cursor-pointer"}
							>마이페이지</p>
						</Link>
					</div>
				</div>
			</RecoilRoot>
		</AuthContext>
		</body>
		</html>
	);
}
