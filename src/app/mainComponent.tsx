import React, {useState} from 'react';
import Image from "next/image";
import loveImage from "../../public/main/love.png";
import zeroImage from "../../public/main/0.png";
import 언짢음 from "../../public/main/emotion/언짢음.png";
import placeImage from "../../public/main/place.png";
import wariImage from '../../public/main/wari.png';

type propsType = {};

export default function MainComponent(props: propsType) {
	const [warning, setWarning] = useState(false);
	return (
		<>
			<div className="w-full">
				<div className="flex flex-col items-end justify-end pb-[40px]">
					<div className="flex items-center text-[12px] font-bold">
						<p>유저1</p>
						<Image className="" alt="하트" src={loveImage} width={24} height={24}/>
						<p>유저2</p>
					</div>
					<div className="flex items-center text-[12px] text-center relative">
						<div>
							<Image onClick={() => setWarning(prev => !prev)} className="peer cursor-pointer" src={wariImage} alt="위험해"/>
							{
								warning &&
								<div
								className="border-[#EE404C] w-[206px] h-[96px] border-[1px] border-solid mt-[4px] rounded-[5px] absolute right-0 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
								<p className="text-left text-[11px] leading-[16px] p-[8px]">
									연인과 정보가 연결되지 않았어요. <br/>
									정보를 연결하면 연구결과를 함께 공유할 수 있어요.
								</p>
								<button
									className="w-[190px] bg-[#3668EA] h-[24px] px-[8px] rounded-[5px] text-white text-[11px] font-bold leading-[16px]">
									연결하러 가기
								</button>
							</div>
							}
						</div>
						<p>
							연구를 시작한 지 <em className="text-[14px] font-bold">32</em>일 째
						</p>
					</div>
				</div>

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
							<em className="text-[#AAA] text-[11px] pb-[10px]">조금만 더 분석하러 가 볼까요?</em>
							<button className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">분석하러 가기
							</button>
						</div>
					</div>
				</div>
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
							<p className="text-[#AAA] text-[11px] pb-[10px]">어떤 감정들이 분석됐는지 확인해볼까요?</p>
							<button className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">타임라인 보기
							</button>
						</div>
					</div>
				</div>
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
							<button className="bg-[#3668EA] rounded-[5px] w-[100px] h-[24px] text-[11px] text-[#FFF]">타임라인 보기
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}