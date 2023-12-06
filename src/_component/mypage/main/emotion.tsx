import Image from "next/image";
import 언짢음 from "../../../../public/main/emotion/언짢음.png";
import React from "react";
import {useRouter} from "next/navigation";

export default function Emotion() {
	const router = useRouter();

	return (
		<div className="border-black border-solid border-b-[1px] pb-[30px] mb-[20px]">
			<div className="pb-[30px]">
				<p className="text-[18px] font-bold pb-[6px]">연구 통계 - 감정</p>
				<p className="text-[12px] leading-[16px]">이번 주에 가장 많이 분석된 감정을 알 수 있어요.</p>
			</div>
			<div className="flex flex-col items-center">
				<Image className="pb-[18px]" alt="0%" src={언짢음}/>
				<div className="flex flex-col items-center">
					<p className="text-[13px] leading-[20px] text-center pb-[6px]">
						이번 주에 가장 많이 분석된 감정은<br/>
						<em className="text-[16px] font-bold">언짢음</em>이에요!
					</p>
					<p className="text-[#AAA] text-[11px] leading-[16px] pb-[10px]">어떤 감정들이 분석됐는지 확인해볼까요?</p>
					<button
						className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] font-bold leading-[16px] text-[#FFF]"
						onClick={() => router.push('/timeline')}
					>타임라인
						보기
					</button>
				</div>
			</div>
		</div>
	);
}