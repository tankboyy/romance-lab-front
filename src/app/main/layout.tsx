'use client';

import React, {useState} from "react";
import Image from 'next/image';
import loveImage from "../../../public/main/love.png";


export default function Layout({
																 children,
															 }: {
	children: React.ReactNode
}) {
	const [step, setStep] = useState("메인페이지");
	return (
		<section className="w-[375px] relative m-[20px]">
			<nav className="m-[20px]">
				<div className="flex flex-col items-end justify-end text-[12px]">
					<div className="flex items-center">
						<p>유저1</p>
						<Image className="mx-1" alt="하트" src={loveImage}/>
						<p>유저2</p>
					</div>
					<div className="flex items-center">
						<p>연구를 시작한 지 </p>
						<p className="font-medium text-[14px] mx-0.5">32</p>
						<p>일 째</p>
					</div>
				</div>
			</nav>
			{children}
			<div className="flex justify-between">
				<p>메인페이지</p>
				<p>분석하기</p>
				<p>타임라인</p>
				<p>마이페이지</p>
			</div>
		</section>
	);
}
