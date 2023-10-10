'use client';
import {redirect, usePathname} from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Layout({
																 children, // will be a page or nested layout
															 }: { children: React.ReactNode }) {
	const router = usePathname().split('/')[1];
	return (
		<section>
			<nav></nav>
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
		</section>
	);
}