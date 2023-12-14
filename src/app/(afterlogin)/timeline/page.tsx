'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useRecoilState} from "recoil";
import {timelineListState, TimelineListType} from "@/recoil/atoms";
import {useRouter} from "next/navigation";
import Timelines from "@/_component/timeline/timelines";
import {log} from "util";
import NotAnalyze from "@/_component/timeline/notAnalyze";

type propsType = {};

export default function Page(props: propsType) {
	const [timelineList, setTimelineList] = useRecoilState(timelineListState);
	const router = useRouter();
	return (
		<main className="p-[20px] pb-[50px] h-full">
			<div className="pt-[10px]">
				<div className="space-y-[40px]">
					<p className="flex flex-col leading-[32px] font-bold">
						<em className="text-[24px] pb-[10px]">타임라인</em>
						<em className="font-normal leading-[24px] text-[14px]">이번주에 분석한 텍스트들을 <br/>모아볼 수 있어요.</em>
					</p>
					{timelineList.length === 0 ?
						<NotAnalyze/>
						:
						<div className="flex flex-col items-center">
							<Image src="/main/emotion/언짢음.png" alt="언짢음" className="pb-[18px]" width={74} height={74}/>
							<p className="text-[13px] text-center leading-[20px]">
								이번 주에 가장 많이 분석된 감정은 <br/>
								<em className="font-bold text-[16px]">언짢음</em>
								이에요!
							</p>
						</div>
					}
					<div>
						<p
							className="pb-[6px] items-center text-[14px] border-solid border-black border-b-[1px] mb-[10px] flex justify-between">
							<em className="leading-[24px]">분석결과</em>
							<Link href="/timeline/all" className="text-[11px] underline">전체 기록 보기</Link>
						</p>
						{timelineList.length === 0 ?
							<div className="flex flex-col items-center text-center pt-[40px] space-y-[14px]">
								<span className="text-[13px] leading-[20px]">
									이번 주에 분석된 텍스트 기록이 없어요. <br/>
									지금 텍스트를 분석하러 가볼까요?
								</span>
								<button
									className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] font-bold leading-[16px] text-[#FFF]"
									onClick={() => router.push('/analyze')}
								>
									분석하러 가기
								</button>
							</div>
							:
							<div>
								{timelineList.map((timeline: TimelineListType, i) => (
									<Timelines {...timeline} key={i}/>
								))}
							</div>
						}
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

		</main>
	);
}