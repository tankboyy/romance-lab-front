'use client';

import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

type propsType = {};

export default function Page(props: propsType) {
	const router = useRouter();
	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-full p-[20px] pb-[50px] relative">
			<div className="pt-[10px] pb-[40px]">
				<p className="text-[24px] leading-[32px] font-bold pb-[10px]">
					편지를 확인해보세요!
				</p>
				<p className="text-[14px] leading-[24px]">
					사랑하는 연인이 당신에게
					<br/>
					편지를 전송했어요!
				</p>
			</div>
			<div className="w-[calc(100%+40px)] ml-[-20px] bg-red-50 p-[20px] mb-[40px]">
				<p className="text-[14px] text-center pb-[20px]">
					세상에서 가장 아름다운 우리 금쪽이에게...
				</p>
				<p className="leading-[18px] text-[12px] pb-[20px]">
					세상에서 제일 힘들고도 행복한게 바로 사랑인가봐..
					당신이 울거나 지칠때는 정말 힘들지만
					당신이 웃으면서 사랑한다고 하면 세상 다 가진것보다 행복해
					<br/>
					<br/>
					당신과 만나지 얼마 안됐지만 그동안 정말 많은 것을 배우고 잃었어..
					당신 때문에 사랑이란걸 배우고 슬픔 이란걸 잃었어..
					앞으로도 계속 서로에게 사랑을 가르쳐주고 슬픔을 버리게 하는 그런 존재가 되어주자
					<br/>
					<br/>
					옆에만 있어도 당신의 행복의 이유가 되는 그런 당신의 영원한 사람이 되고 싶어...
					우리 영원히 변치말아요
					내가 평생 지켜줄께요...
					나의 공주님!!
					사랑한다 금쪽아..
					당신의 반쪽인 은쪽이가..
				</p>
				<p className="text-[12px] text-right">
					From. 은쪽이
				</p>
			</div>
			<div>
				<p className="text-[14px] border-b-[1px] border-solid pb-[10px] mb-[22px]">
					서비스 즐겨보기
				</p>
				<div className="flex flex-col items-center text-center">
					<Image className="pb-[10px]" src="/login/icon.png" alt="아이콘" width={64} height={64}/>
					<p className="leading-[18px] text-[11px] pb-[20px]">
						<em className="text-[12px] font-bold">
							애정연구소
						</em>는 연인끼리 주고 받는 텍스트를 <br/>
						AI를 이용해 다양한 관점에서 <br/>
						분석해주는 웹 어플리케이션입니다.
					</p>
					<p className="text-[13px] leading-[20px] pb-[20px]">
						연인과 함께 <br/>
						여러분의 애정을 연구해보세요!
					</p>
					<button className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[12px] font-bold text-white"
									onClick={() => router.push('/login')}
					>
						서비스 즐기러 가기
					</button>
				</div>
			</div>
		</div>
	);
}