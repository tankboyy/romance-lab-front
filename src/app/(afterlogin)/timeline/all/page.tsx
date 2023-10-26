'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
	return (
		<div className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] pb-[50px]">
			<div className="pb-[40px]">
				<p className="flex flex-col leading-[32px] font-bold">
					<em className="text-[24px] pb-[10px]">타임라인</em>
					<em className="font-normal leading-[24px] text-[14px]">지금까지 분석한 모든 텍스트들을
						<br/>모아볼 수 있어요.</em>
				</p>
			</div>
			<div>
				<p
					className="pb-[6px] items-center text-[14px] border-solid border-black border-b-[1px] mb-[10px] flex justify-between">
					<em className="leading-[24px]">분석결과</em>
					<Link href="/timeline" className="text-[11px] underline">이번 주 기록보기</Link>
				</p>

				<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">
					<div className="mx-[10px] min-w-[44px]">
						<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
					</div>
					<p className="space-y-[8px] w-full">
						<em className="text-[12px] leading-[18px]">유저1 (나)님이 편지를 분석했어요.</em><br/>
						<em className="text-[11px] text-[#AAA]">2023.09.07</em>
					</p>
				</div>


				<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">
					<div className="mx-[10px] min-w-[44px]">
						<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
					</div>
					<p className="space-y-[8px] w-full">
						<em className="text-[12px]">유저2 (연인)님이 일기를 분석했어요.</em><br/>
						<div className="justify-between flex">
							<em className="text-[11px] text-[#AAA]">2023.09.07</em>
						</div>
					</p>
				</div>
				<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">
					<div className="mx-[10px] min-w-[44px]">
						<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
					</div>
					<p className="space-y-[8px] w-full">
						<em className="text-[12px]">유저2유저2유저2유저2 (연인)님이 가족모임기록을 분석했어요.</em><br/>
						<div className="justify-between flex">
							<em className="text-[11px] text-[#AAA]">2023.09.07</em>
							<Link href="/timeline/1234/template" className="text-[11px] underline">편지템플릿 보기</Link>

						</div>
					</p>
				</div>
				<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">

					<div className="mx-[10px] min-w-[44px]">
						<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
					</div>
					<p className="space-y-[8px] w-full">
						<em className="text-[12px]">유저1 (나)님이 채팅를 분석했어요.</em><br/>
						<em className="text-[11px] text-[#AAA]">2023.09.07</em>
					</p>
				</div>
				<div className="flex items-center py-[16px]">
					<div className="mx-[10px] min-w-[44px]">
						<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
					</div>
					<p className="space-y-[8px] w-full">
						<em className="text-[12px]">유저1 (나)님이 편지를 분석했어요.</em><br/>
						<em className="text-[11px] text-[#AAA]">2023.09.07</em>
					</p>
				</div>
			</div>
			<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-[60px] fixed">
				<div className="flex justify-end pr-[20px]">
					<Link href="/timeline/map">
						<Image className="" src="/main/place.png" alt="지도"
									 width={44} height={44}>
						</Image>
					</Link>
				</div>
			</div>
		</div>
	);
}