import React from 'react';
import Image from "next/image";
import loveImage from "../../public/main/love.png";
import zeroImage from "../../public/main/0.png";
import 언짢음 from "../../public/main/emotion/언짢음.png";
import placeImage from "../../public/main/place.png";

type propsType = {};

export default function MainComponent(props: propsType) {
	return (
		<>
			<div>
				<div className="flex flex-col items-end justify-end text-[12px] pb-[20px]">
					<div className="flex items-center">
						<p>유저1</p>
						<Image className="mx-1" alt="하트" src={loveImage}/>
						<p>유저2</p>
					</div>
					<div className="flex items-center">
						<p>연구를 시작한 지 </p>
						<p className="font-medium text-[14px] mx-0.5">32</p>
						<p>일 째</p>
					</div>
				</div>
				<div className="border-black border-solid border-b-[1px] pb-[20px] mb-[10px]">
					<div>
						<p className="text-[18px] font-medium">연구 활성도</p>
						<p className="text-[12px]">텍스트를 분석할 때마다 연구 활성도가 상승해요!</p>
					</div>
					<div className="flex flex-col items-center mt-[25px]">
						<Image className="mb-[15px]" alt="0%" src={zeroImage}/>
						<div className="flex flex-col items-center">
							<p>이번 주의 연구 활성도는</p>
							<div className="flex items-end">
								<p className="font-medium text-[18px]">0%</p>
								<p>에요!</p>
							</div>
							<p className="text-[#AAA] text-[11px]">조금만 더 분석하러 가 볼까요?</p>
							<button className="m-[10px] bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">분석하러 가기
							</button>
						</div>
					</div>
				</div>
				<div className="border-black border-solid border-b-[1px] pb-[20px] mb-[10px]">
					<div>
						<p className="text-[18px] font-medium">연구 통계 - 감정</p>
						<p className="text-[12px]">이번 주에 가장 많이 분석된 감정을 알 수 있어요.</p>
					</div>
					<div className="flex flex-col items-center mt-[25px]">
						<Image className="mb-[15px]" alt="0%" src={언짢음}/>
						<div className="flex flex-col items-center">
							<p>이번 주의 가장 많이 분석된 감정은</p>
							<div className="flex items-end">
								<p className="font-medium text-[18px]">언짢음</p>
								<p>이에요!</p>
							</div>
							<p className="text-[#AAA] text-[11px]">어떤 감정들이 분석됐는지 확인해볼까요?</p>
							<button className="m-[10px] bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">타임라인 보기
							</button>
						</div>
					</div>
				</div>
				<div>
					<div>
						<p className="text-[18px] font-medium">연구 통계 - 장소</p>
						<p className="text-[12px]">지금까지 등록했던 장소들을 볼 수 있어요.</p>
					</div>
					<div className="flex flex-col items-center mt-[25px]">
						<Image className="mb-[15px]" alt="0%" src={placeImage}/>
						<div className="flex flex-col items-center">
							<p>우리가 어떤 장소를 찾아갔는지</p>
							<div className="flex items-end">
								<p>확인해볼까요?</p>
							</div>
							<button className="m-[10px] bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">타임라인 보기
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}