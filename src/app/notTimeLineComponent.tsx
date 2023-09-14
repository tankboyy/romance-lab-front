import React from 'react';
import Image from "next/image";

type propsType = {};

export default function NotTimeLineComponent(props: propsType) {
	return (
		<div>
			<p className="flex flex-col">
				<a className="text-[24px] pb-[10px]">타임라인</a>
				<a>이번주에 분석한 텍스트들을 <br/>모아볼 수 있어요.</a>
			</p>
			<div className="flex flex-col items-center p-[40px]">
				<Image src="/main/not.png" alt="not" className="pb-[20px]" width={74} height={74}/>
				<p className="text-[13px] text-center">
					이번 주에는 분석된 텍스트가 없어<br/>
					감정을 확인할 수 없어요.
				</p>
			</div>
			<div>
				<p className="pb-[5px] text-[14px] border-solid border-black border-b-[1px] mb-[15px] flex justify-between">
					<a>분석결과</a>
					<a className="text-[11px] underline">전체 기록 보기</a>
				</p>

				<div className="flex border-b-[1px] py-[10px] items-center flex-col text-center text-[13px]">
					<p className="pb-[13px]">
						<a>이번 주에 분석된 텍스트 기록이 없어요. <br/>지금 텍스트를 분석하러 가볼까요?</a>
					</p>
					<button className="h-[24px] bg-[#3668EA] rounded-[5px] w-24 text-white text-[11px]">
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