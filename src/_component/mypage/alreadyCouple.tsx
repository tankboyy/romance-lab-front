import Image from "next/image";
import React from "react";

export default function AlreadyCouple() {
	return (
		<div className="pb-[50px]">
			<div
				className="flex flex-col py-[30px] px-[10px] border-b-[1px] border-solid border-[#777] items-center space-y-[5px] mb-[30px]">
				<Image src="/main/heart.svg" alt="하트" height={80} width={80}/>
				<em className="text-[14px] text-center leading-[20px]">
					연인과 함께 애정연구소를 <br/>
					사용하고 있어요!
				</em>
			</div>
			<div className="flex flex-col items-center">
				<em className="text-[11px] text-[#AAA] text-center leading-[16px] pb-[14px]">
					원하지 않는 회원과 연결됐나요? <br/>
					해당 회원과의 연결을 해제할 수 있어요.
				</em>
				<button className="w-[100px] h-[24px] bg-[#AAA] rounded-[5px] text-[11px] font-bold text-[#FFF]">연결끊기</button>
			</div>
		</div>
	);
}