'use client';

import Image from 'next/image';
import React, {useState} from "react";
import {TnowTap} from "../../public/types/main/types";
import MainComponent from "./mainComponent";
import AnalyzeComponent from "./analyzeComponent";
import TimeLineComponent from "./timeLineComponent";
import MypageComponent from "./mypageComponent";

export default function Home() {
	const [nowTap, setNowTap] = useState<TnowTap>("메인페이지");

	return (
		<div
			className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vh] p-[20px] justify-between pb-[80px]">
			{
				nowTap === "메인페이지" ? <MainComponent/> :
					nowTap === "분석하기" ? <AnalyzeComponent/> :
						nowTap === "타임라인" ? <TimeLineComponent/> :
							<MypageComponent/>
			}
			<div
				className="border-t-[1px] p-0 border-[#E2E2E2] border-solid mx-auto fixed bottom-0 left-0 right-0 max-w-[420px] h-[50px] text-[11px] bg-white">
				<div className="flex justify-between pt-[15px] px-4">
					<p className={nowTap === "메인페이지" ? "underline" : "text-[#AAA]"}
						 onClick={(event) => setNowTap("메인페이지")}
					>메인페이지</p>
					<p className={nowTap === "분석하기" ? "underline" : "text-[#AAA]"}
						 onClick={(event) => setNowTap("분석하기")}>분석하기</p>
					<p className={nowTap === "타임라인" ? "underline" : "text-[#AAA]"}
						 onClick={(event) => setNowTap("타임라인")}>타임라인</p>
					<p className={nowTap === "마이페이지" ? "underline" : "text-[#AAA]"}
						 onClick={(event) => setNowTap("마이페이지")}>마이페이지</p>
				</div>
			</div>
		</div>
	);
}
