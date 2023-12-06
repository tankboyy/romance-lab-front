import Image from "next/image";
import zeroImage from "../../../../public/main/0.png";
import React from "react";
import {useRouter} from "next/navigation";

export default function Activity() {
	const router = useRouter();

	return (
		<div className="border-black border-solid border-b-[1px] pb-[30px] mb-[20px]">
			<div className="pb-[20px]">
				<p className="text-[18px] font-bold pb-[6px]">연구 활성도</p>
				<p className="text-[12px] leading-[16px]">텍스트를 분석할 때마다 연구 활성도가 상승해요!</p>
			</div>
			<div className="flex flex-col items-center">
				<Image className="mb-[12px]" alt="0%" src={zeroImage}/>
				<div className="flex flex-col items-center">
					<p className="text-[13px] leading-[20px] text-center pb-[6px]">
						이번 주의 연구 활성도는 <br/>
						<em className="text-[16px] font-bold">0%</em>에요!
					</p>
					<em className="text-[#AAA] text-[11px] leading-[16px] pb-[10px]">조금만 더 분석하러 가 볼까요?</em>
					<button
						className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] font-bold leading-[16px] text-[#FFF]"
						onClick={() => router.push('/analysis')}
					>
						분석하러 가기
					</button>
				</div>
			</div>
		</div>
	);
}