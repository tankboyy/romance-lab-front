'use client';
import React from 'react';
import Image from 'next/image';
import zeroImage from '../../../public/main/0.png';

type propsType = {};

export default function Page(props: propsType) {
	return (
		<div className="w-[375px] h-[667px] relative">
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
	);
}