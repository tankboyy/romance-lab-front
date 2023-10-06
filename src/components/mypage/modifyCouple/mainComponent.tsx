'use client';
import React from 'react';
import Image from "next/image";

type propsType = {};

export default function MainComponent(props: propsType) {
	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				<div className="pb-[26px]">
					<Image alt="화살표" src="/main/arrow2.png" width={7} height={14}/>
				</div>
				<div>
					<div className="text-[24px] font-bold pb-[44px]">
						커플 정보 수정하기
					</div>
					<div className="flex flex-col justify-center">
						<div className="flex flex-col w-full">
							<label className="text-left text-[14px] pl-[4px] pb-[10px]">연애 시작날짜</label>
							<div className="flex relative pb-[22px]">
								<input
									type="date"
									required
									// aria-required={true}
									data-placeholder="여러분의 사랑이 시작된 날짜를 입력해주세요"
									className="w-full p-[10px] leading-3 h-[30px] focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
								/>
								<div className="pl-[10px] pt-[10px] absolute bottom-0">
									<p
										className="text-[#E84E4E] text-[12px]">오늘보다 늦은 날짜는 선택할 수 없어요.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button className="w-full h-[40px] bg-[#D9D9D9] rounded-[5px] text-white text-[12px] font-bold">
					수정 완료
				</button>
			</div>
		</div>
	);
}