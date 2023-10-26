'use client';

import React, {useState} from 'react';
import Image from "next/image";

type propsType = {};

export default function Page(props: propsType) {

	const [modalOpen, setModalOpen] = useState(false);

	const popup = () => {
		setModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closePopup = () => {
		setModalOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col p-[20px] pb-[50px] relative">
			{
				modalOpen &&
        <div>
          <div className="bg-[rgba(255,255,255,0.8)] fixed left-0 top-0 w-full h-full z-20 cursor-pointer"
               onClick={() => closePopup()}
          >
          </div>
          <div
            className="bg-white z-30 w-[206px] fixed h-[102px] p-[10px] border-[1px] border-solid border-[#616161] rounded-[5px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="text-[11px] leading-[16px] text-center pb-[10px]">
              편지 템플릿을 재생성하면 <br/>
              현재의 템플릿은 삭제돼요. <br/>
              정말 다시 만들까요?
            </p>
            <div className="flex">
              <button
                className="mr-[10px] w-[90px] h-[24px] bg-[#3668EA] rounded-[5px] text-white text-[11px] font-bold">다시
                만들기
              </button>
              <button onClick={closePopup}
                      className="w-[90px] h-[24px] bg-[#EEE] rounded-[5px] text-[11px] font-bold">취소
              </button>
            </div>
          </div>
        </div>
			}
			<div className="pt-[10px] space-y-[10px] pb-[40px]">
				<p className="font-bold text-[24px]">편지템플릿</p>
				<p className="leading-[24px] text-[14px]">
					분석된 텍스트를 바탕으로 <br/>
					AI가 생성한 편지 템플릿이에요.
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
			<div className="space-y-[40px]">
				<div>
					<p className="text-[14px] border-b-[1px] border-solid pb-[10px] mb-[16px]">
						배경색 바꾸기
					</p>
					<div className="flex space-x-[10px]">
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] bg-amber-100 rounded-[5px] border-solid border-[1px]"/>
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] bg-amber-400 rounded-[5px] border-solid border-[1px]"/>
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] bg-blue-300 rounded-[5px] border-solid border-[1px]"/>
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] bg-green-200 rounded-[5px] border-solid border-[1px]"/>
					</div>
				</div>
				<div>
					<p className="text-[14px] border-b-[1px] border-solid pb-[10px] mb-[16px]">
						폰트 바꾸기
					</p>
					<div className="flex space-x-[10px] text-[12px] text-center">
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] rounded-[5px] border-solid border-[1px] flex justify-center items-center">
							나눔 <br/>
							스퀘어
						</div>
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] rounded-[5px] border-solid border-[1px] flex justify-center items-center font-Mjo">
							나눔 <br/>
							명조
						</div>
					</div>
				</div>
				<div>
					<p className="text-[14px] border-b-[1px] border-solid pb-[10px] mb-[16px]">
						공유하기
					</p>
					<div className="flex space-x-[10px] text-[12px] text-center">
						<div
							className="bg-[#FFF739] cursor-pointer shadow-timeline h-[44px] w-[44px] rounded-[5px] border-solid border-[1px] flex justify-center items-center">
							<Image src="/timeline/kakaoIcon.png" alt="카카오" width={21} height={19.5}/>
						</div>
						<div
							className="shadow-timeline cursor-pointer h-[44px] w-[44px] rounded-[5px] border-solid border-[1px] flex justify-center items-center font-bold">
							URL
						</div>
					</div>
				</div>
				<div className="pb-[60px]">
					<p className="text-[14px] border-b-[1px] border-solid pb-[10px] mb-[26px]">
						다시만들기
					</p>
					<div
						className="flex flex-col text-[12px] text-center justify-center items-center space-y-[14px]">
						<p className="text-[13px] leading-[20px]">
							편지 템플릿을 <br/>
							다시 생성할까요?
						</p>
						<button className="text-[11px] text-bold text-white bg-[#3668EA] h-[24px] w-[100px] rounded-[5px]"
										onClick={() => popup()}
						>
							다시 만들기
						</button>
						<p className="text-[11px] text-[#AAA] leading-[16px]">
							편지 템플릿을 재생성하면 <br/>
							현재의 템플릿은 삭제돼요!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}