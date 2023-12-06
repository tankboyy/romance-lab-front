import {useRouter} from "next/navigation";
import Image from "next/image";
import placeImage from "../../../../public/main/place.png";
import React from "react";

export default function Location() {
	const router = useRouter();

	return (
		<div>
			<div className="pb-[30px]">
				<p className="text-[18px] font-bold pb-[6px]">연구 통계 - 장소</p>
				<p className="text-[12px] leading-[16px]">지금까지 등록했던 장소들을 볼 수 있어요.</p>
			</div>
			<div className="flex flex-col items-center">
				<Image className="mb-[18px]" alt="0%" src={placeImage}/>
				<div className="flex flex-col items-center">
					<p className="text-[13px] leading-[20px] text-center pb-[10px]">우리가 어떤 장소를 찾아갔는지
						<br/>확인해볼까요?</p>
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