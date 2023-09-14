import React from 'react';
import Image from 'next/image';
import NotTimeLineComponent from "./notTimeLineComponent";

type propsType = {};

export default function TimeLineComponent(props: propsType) {
	return (
		<div>
			<NotTimeLineComponent/>
		</div>
		// <div>
		// 	<p className="flex flex-col">
		// 		<a className="text-[24px] pb-[10px]">타임라인</a>
		// 		<a>이번주에 분석한 텍스트들을 <br/>모아볼 수 있어요.</a>
		// 	</p>
		// 	<div className="flex flex-col items-center p-[40px]">
		// 		<Image src="/main/emotion/언짢음.png" alt="언짢음" className="pb-[20px]" width={74} height={74}/>
		// 		<p className="text-[13px] text-center">
		// 			이번 주에 가장 많이 분석된 감정은 <br/>
		// 			<a className="font-medium text-[16px]">언짢음</a>
		// 			이에요!
		// 		</p>
		// 	</div>
		// 	<div>
		// 		<p className="pb-[5px] text-[14px] border-solid border-black border-b-[1px] mb-[15px] flex justify-between">
		// 			<a>분석결과</a>
		// 			<a className="text-[11px] underline">전체 기록 보기</a>
		// 		</p>
		// 		<div className="flex border-b-[1px] py-[10px] items-center">
		// 			<div className="mx-[10px] min-w-[44px]">
		// 				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
		// 			</div>
		// 			<p className="">
		// 				<a className="text-[12px]">유저1 (나)님이 편지를 분석했어요.</a><br/>
		// 				<a className="text-[10px] text-[#AAA]">2023.09.07</a>
		// 			</p>
		// 		</div>
		// 		<div className="flex border-b-[1px] py-[10px] items-center">
		// 			<div className="mx-[10px] min-w-[44px]">
		// 				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
		// 			</div>
		// 			<p className="w-full">
		// 				<a className="text-[12px]">유저2 (연인)님이 일기를 분석했어요.</a><br/>
		// 				<div className="justify-between flex">
		// 					<a className="text-[10px] text-[#AAA]">2023.09.07</a>
		// 					<a className="text-[10px] underline">편지템플릿 보기</a>
		// 				</div>
		// 			</p>
		// 		</div>
		// 		<div className="flex border-b-[1px] py-[10px] items-center">
		// 			<div className="mx-[10px] min-w-[44px]">
		// 				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
		// 			</div>
		// 			<p className="w-full">
		// 				<a className="text-[12px]">유저2유저2유저2유저2 (연인)님이 가족모임기록을 분석했어요.</a><br/>
		// 				<div className="justify-between flex">
		// 					<a className="text-[10px] text-[#AAA]">2023.09.07</a>
		// 					<a className="text-[10px] underline">편지템플릿 보기</a>
		// 				</div>
		// 			</p>
		// 		</div>
		// 		<div className="flex border-b-[1px] py-[10px] items-center">
		// 			<div className="mx-[10px] min-w-[44px]">
		// 				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
		// 			</div>
		// 			<p className="">
		// 				<a className="text-[12px]">유저1 (나)님이 채팅를 분석했어요.</a><br/>
		// 				<a className="text-[10px] text-[#AAA]">2023.09.07</a>
		// 			</p>
		// 		</div>
		// 		<div className="flex py-[10px]">
		// 			<div className="mx-[10px] min-w-[44px]">
		// 				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
		// 			</div>
		// 			<p className="">
		// 				<a className="text-[12px]">유저1 (나)님이 편지를 분석했어요.</a><br/>
		// 				<a className="text-[10px] text-[#AAA]">2023.09.07</a>
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-14 fixed">
		// 		<div className="flex justify-end pr-[15px]">
		// 			<Image className="" src="/main/place.png" alt="지도" width={44} height={44}/>
		// 		</div>
		// 	</div>
		// </div>
	);
}