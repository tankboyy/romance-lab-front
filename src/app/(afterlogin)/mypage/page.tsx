'use client';

import React, {useState} from 'react';
import Image from "next/image";
import InputComponent2 from "../../../_component/free/InputComponent2";
import loginImage from "../../../../public/login/icon.png";
import loveImage from "../../../../public/main/love.png";

type propsType = {};

export default function Page(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");

	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col p-[20px] w-[100vw]">
			<div className="py-[54px]">
				<div className="flex flex-col items-center pb-[62px]">
					<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>
					<div className="flex items-center text-[16px] font-bold">
						<p>유저1</p>
						<Image className="" alt="하트" src="/main/love2.png" width={36} height={36}/>
						<p>유저2</p>
					</div>
					<Image className="pb-[17px]" alt="메인" src={loginImage} width={88} height={88}/>
					<em className="text-[12px]">연구를 시작한지 <em className="text-[13px] font-bold">32</em>일 됐어요</em>
				</div>

				<div className="border-y-[1px] border-solid border-[#777] py-[10px] px-[10px] mb-[10px]">
					<div className="flex justify-between items-center text-center pb-[10px]">
						<em className="text-[14px]">회원 정보</em>
						<em className="text-[11px] underline">커플 정보 수정</em>
					</div>

					<div className="flex justify-between items-center py-[10px] border-b-[1px] border-solid border-[#E2E2E2]">
						<div className=" flex flex-col">
							<div className="flex items-center text-[12px] pb-[3px]">
								<em>유저1 (나)</em>
								<Image src="/main/boy.png" className="ml-[6px] mr-[2px]" height={20} alt="남자" width={20}/>
								<em>24세</em>
							</div>
							<em className="text-[11px] text-[#AAA]">카카오톡 로그인</em>
						</div>
						<em className="text-[11px] underline">회원 정보 수정</em>
					</div>

					<div className="flex justify-between items-center py-[10px]">
						<div className=" flex flex-col">
							<div className="flex items-center text-[12px] pb-[3px]">
								<em>유저2 (연인)</em>
								<Image src="/main/girl.png" className="ml-[6px] mr-[2px]" height={20} alt="여자" width={20}/>
								<em>22세</em>
							</div>
							<em className="text-[11px] text-[#AAA]">직접 입력</em>
						</div>
						<em className="text-[11px] underline">회원 정보 수정</em>
					</div>

				</div>
				<div className="flex flex-col px-[10px] border-b-[1px] border-solid border-[#777] pb-[20px] mb-[10px]">
					<em className="text-[14px] pb-[18px]">회원 코드</em>
					<div className="flex flex-col items-center space-y-[10px]">
						<em className="text-center text-[13px] leading-[20px]">내 연인과 함께 연구결과를 <br/>
							공유해보세요!</em>
						<div
							className="border-b border-solid border-[#E2E2E2] w-[130px] text-center py-[5px] text-[14px] cursor-pointer">
							01AB97
						</div>
						<em className="text-[11px] leading-[16px] text-center text-[#AAA]">
							연인이 회원코드를 입력하고 가입하면 <br/>
							애정염소를 함께 키울 수 있어요
						</em>
					</div>
				</div>

				<div className="flex flex-col px-[10px] pb-[20px] mb-[10px]">
					<em className="text-[14px] pb-[18px]">연인 연결하기</em>
					<div className="flex flex-col items-center space-y-[10px]">
						<em className="text-center text-[13px] leading-[20px]">내 연인의 회원코드를<br/>
							입력하세요</em>
						<input
							className="border-b border-solid border-[#E2E2E2] w-[130px] text-center py-[5px] text-[14px] text-[#AAA]
							outline-none
							"
							placeholder="회원코드"
						/>
						<em className="text-[11px] leading-[16px] text-center text-[#AAA] pb-[4px]">
							연인의 회원코드를 입력해서 <br/>
							텍스트 연구 결과를 공유해보세요
						</em>
						<button className="w-[100px] h-[24px] bg-[#3668EA] rounded-[5px] text-[11px] leading-[16px] text-white">
							연결하기
						</button>
					</div>
				</div>
			</div>


			{/*<div>*/}
			{/*	<div className="flex flex-col items-center pb-[62px]">*/}
			{/*		<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>*/}
			{/*		<div className="flex items-center text-[16px] font-bold">*/}
			{/*			<p>유저1</p>*/}
			{/*			<Image className="" alt="하트" src={loveImage} width={36} height={36}/>*/}
			{/*			<p>유저2</p>*/}
			{/*		</div>*/}
			{/*		<Image className="pb-[17px]" alt="메인" src={loginImage} width={88} height={88}/>*/}
			{/*		<em className="text-[12px]">연구를 시작한지 <em className="text-[13px] font-bold">32</em>일 됐어요</em>*/}
			{/*	</div>*/}
			{/*	<div className="border-y-[1px] border-solid border-[#777] py-[10px] px-[10px] mb-[10px]">*/}
			{/*		<div className="flex justify-between items-center text-center pb-[10px]">*/}
			{/*			<em className="text-[14px]">회원 정보</em>*/}
			{/*			<em className="text-[11px] underline">커플 정보 수정</em>*/}
			{/*		</div>*/}

			{/*		<div className="flex justify-between items-center py-[10px] border-b-[1px] border-solid border-[#E2E2E2]">*/}
			{/*			<div className=" flex flex-col">*/}
			{/*				<div className="flex items-center text-[12px] pb-[3px]">*/}
			{/*					<em>유저1 (나)</em>*/}
			{/*					<Image src="/main/boy.png" className="ml-[6px] mr-[2px]" height={20} alt="남자" width={20}/>*/}
			{/*					<em>24세</em>*/}
			{/*				</div>*/}
			{/*				<em className="text-[11px] text-[#AAA]">카카오톡 로그인</em>*/}
			{/*			</div>*/}
			{/*			<em className="text-[11px] underline">회원 정보 수정</em>*/}
			{/*		</div>*/}

			{/*		<div className="flex justify-between items-center py-[10px]">*/}
			{/*			<div className=" flex flex-col">*/}
			{/*				<div className="flex items-center text-[12px] pb-[3px]">*/}
			{/*					<em>유저2 (연인)</em>*/}
			{/*					<Image src="/main/girl.png" className="ml-[6px] mr-[2px]" height={20} alt="여자" width={20}/>*/}
			{/*					<em>22세</em>*/}
			{/*				</div>*/}
			{/*				<em className="text-[11px] text-[#AAA]">직접 입력</em>*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*	</div>*/}
			{/*	<div*/}
			{/*		className="flex flex-col py-[30px] px-[10px] border-b-[1px] border-solid border-[#777] items-center mb-[10px] space-y-[5px]">*/}
			{/*		<Image src="/main/heart.png" alt="하트" height={80} width={80}/>*/}
			{/*		<em className="text-[14px] text-center leading-[20px]">*/}
			{/*			연인과 함께 애정연구소를 <br/>*/}
			{/*			사용하고 있어요!*/}
			{/*		</em>*/}
			{/*	</div>*/}

			{/*	<div className="flex flex-col px-[10px] py-[30px] mb-[10px]">*/}
			{/*		<div className="flex flex-col items-center space-y-[10px]">*/}
			{/*			<em className="text-[11px] leading-[16px] text-center text-[#AAA]">*/}
			{/*				원하지 않은 회원과 연결됐나요?<br/>*/}
			{/*				해당 회원과의 연결을 해제할 수 있어요.*/}
			{/*			</em>*/}
			{/*			<button className="w-[100px] h-[24px] bg-[#AAA] rounded-[5px] text-[11px] leading-[16px] text-white">*/}
			{/*				연결하기*/}
			{/*			</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}


			{/*<div>*/}
			{/*	<div className="flex flex-col items-center pb-[62px]">*/}
			{/*		<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>*/}
			{/*		<div className="flex items-center text-[16px] font-bold">*/}
			{/*			<p>유저1</p>*/}
			{/*			<Image className="" alt="하트" src={loveImage} width={36} height={36}/>*/}
			{/*			<p>유저2</p>*/}
			{/*		</div>*/}
			{/*		<Image className="pb-[17px]" alt="메인" src={loginImage} width={88} height={88}/>*/}
			{/*		<em className="text-[12px]">연구를 시작한지 <em className="text-[13px] font-bold">32</em>일 됐어요</em>*/}
			{/*	</div>*/}
			{/*	<div className="border-y-[1px] border-solid border-[#777] py-[10px] px-[10px] mb-[10px]">*/}
			{/*		<div className="flex justify-between items-center text-center pb-[10px]">*/}
			{/*			<em className="text-[14px]">회원 정보</em>*/}
			{/*			<em className="text-[11px] underline">커플 정보 수정</em>*/}
			{/*		</div>*/}

			{/*		<div className="flex justify-between items-center py-[10px] border-b-[1px] border-solid border-[#E2E2E2]">*/}
			{/*			<div className=" flex flex-col">*/}
			{/*				<div className="flex items-center text-[12px] pb-[3px]">*/}
			{/*					<em>유저1 (나)</em>*/}
			{/*					<Image src="/main/boy.png" className="ml-[6px] mr-[2px]" height={20} alt="남자" width={20}/>*/}
			{/*					<em>24세</em>*/}
			{/*				</div>*/}
			{/*				<em className="text-[11px] text-[#AAA]">카카오톡 로그인</em>*/}
			{/*			</div>*/}
			{/*			<em className="text-[11px] underline">회원 정보 수정</em>*/}
			{/*		</div>*/}

			{/*		<div className="flex justify-between items-center py-[10px]">*/}
			{/*			<div className=" flex flex-col">*/}
			{/*				<div className="flex items-center text-[12px] pb-[3px]">*/}
			{/*					<em>유저2 (연인)</em>*/}
			{/*					<Image src="/main/girl.png" className="ml-[6px] mr-[2px]" height={20} alt="여자" width={20}/>*/}
			{/*					<em>22세</em>*/}
			{/*				</div>*/}
			{/*				<em className="text-[11px] text-[#AAA]">직접 입력</em>*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*	</div>*/}
			{/*	<div*/}
			{/*		className="flex flex-col py-[30px] px-[10px] items-center mb-[10px] space-y-[5px]">*/}
			{/*		<Image src="/main/heart.png" alt="하트" height={80} width={80}/>*/}
			{/*		<em className="text-[14px] text-center leading-[20px]">*/}
			{/*			연인과 함께 애정연구소를 <br/>*/}
			{/*			사용하고 있어요!*/}
			{/*		</em>*/}
			{/*	</div>*/}

			{/*</div>*/}
		</div>
	);
}