'use client';

import React from 'react';
import AnalyzeComponent from "./analyzeComponent";
import {usePathname, useRouter} from "next/navigation";

type propsType = {
	params: {
		slug: string
	}
};

export default function Page(props: propsType) {
	const router = usePathname();

	console.log(router);
	return (
		<div
			className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vh] p-[20px] justify-between pb-[80px]">
			<AnalyzeComponent/>
			<div
				className="border-t-[1px] p-0 border-[#E2E2E2] border-solid mx-auto fixed bottom-0 left-0 right-0 max-w-[420px] h-[50px] text-[11px] bg-white">
				<div className="flex justify-between py-[17px] px-[20px] leading-[16px]">
					<p className={router === "메인페이지" ? "underline" : "text-[#AAA]"}
						// onClick={(event) => setNowTap("메인페이지")}

					>메인페이지</p>
					<p className={router === "분석하기" ? "underline" : "text-[#AAA]"}
						// onClick={(event) => setNowTap("분석하기")}
					>분석하기</p>
					<p className={router === "타임라인" ? "underline" : "text-[#AAA]"}
						// onClick={(event) => setNowTap("타임라인")}
					>타임라인</p>
					<p className={router === "마이페이지" ? "underline" : "text-[#AAA]"}
						// onClick={(event) => setNowTap("마이페이지")}
					>마이페이지</p>
				</div>
			</div>
		</div>
	);
}