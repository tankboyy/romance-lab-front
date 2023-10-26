import React from 'react';
import Image from "next/image";

type propsType = {};

export default function NotTimeLineComponent(props: propsType) {
	return (
		<div className="space-y-[40px]">
			<p className="flex flex-col">
				<em className="text-[24px] font-bold leading-[32px] pb-[10px]">타임라인</em>
				<em className="text-[14px] leading-[24px]">이번주에 분석한 텍스트들을 <br/>모아볼 수 있어요.</em>
			</p>
			<div className="flex flex-col items-center">
				<Image src="/main/not.png" alt="not" className="pb-[18px]" width={74} height={74}/>
				<p className="text-[13px] text-center leading-[20px]">
					이번 주에는 분석된 텍스트가 없어<br/>
					감정을 확인할 수 없어요.
				</p>
			</div>
			<div>
				<p
					className="pb-[5px] text-[14px] border-solid border-black border-b-[1px] mb-[40px] flex justify-between items-center">
					<em className="leading-[24px]">분석결과</em>
					<em className="text-[11px] underline">전체 기록 보기</em>
				</p>

				<div className="flex border-b-[1px] py-[10px] items-center flex-col text-center text-[13px]">
					<p className="pb-[14px] leading-[20px]">
						<em>이번 주에 분석된 텍스트 기록이 없어요. <br/>지금 텍스트를 분석하러 가볼까요?</em>
					</p>
					<button className="h-[24px] bg-[#3668EA] rounded-[5px] w-24 text-white text-[11px] leading-[16px]">
						분석하러 가기
					</button>
				</div>

			</div>
			<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-14 fixed">
				<div className="flex justify-end pr-[15px]">
					<Image className="" src="/main/place.png" alt="지도" width={44} height={44}/>
				</div>
			</div>
		</div>
	);
}