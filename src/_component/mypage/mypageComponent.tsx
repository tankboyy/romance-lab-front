import React, {useState} from 'react';
import Image from "next/image";
import loveImage from "../../../public/main/love.png";
import loginImage from "../../../public/login/icon.png";
import InputComponent2 from "../free/InputComponent2";
import {useRecoilState} from "recoil";
import {coupleDataState, userDataState} from "@/recoil/atoms";

type propsType = {};

export default function MypageComponent(props: propsType) {
	const [userData, setUserData] = useRecoilState(userDataState);
	const [coupleData, setCoupleData] = useRecoilState(coupleDataState);

	return (
		<div className="">

			{/*<div className="flex flex-col justify-between h-[600px]">*/}


			{/*	<div>*/}
			{/*		<div className="pb-[26px]">*/}
			{/*			<Image alt="화살표" src="/main/arrow2.png" width={7} height={14}/>*/}
			{/*		</div>*/}
			{/*		<div>*/}
			{/*			<div className="text-[24px] font-bold pb-[44px]">*/}
			{/*				커플 정보 수정하기*/}
			{/*			</div>*/}
			{/*			<div className="flex flex-col justify-center">*/}
			{/*				<div className="flex flex-col w-full">*/}
			{/*					<label className="text-left text-[14px] pl-[4px] pb-[10px]">연애 시작날짜</label>*/}
			{/*					<div className="flex relative pb-[22px]">*/}
			{/*						<input*/}
			{/*							type="date"*/}
			{/*							required*/}
			{/*							// aria-required={true}*/}
			{/*							data-placeholder="여러분의 사랑이 시작된 날짜를 입력해주세요"*/}
			{/*							className="w-full p-[10px] leading-3 h-[30px] focus:outline-none border-b-[1px] border-black border-solid text-[12px]"*/}
			{/*						/>*/}
			{/*						<div className="pl-[10px] pt-[10px] absolute bottom-0">*/}
			{/*							<p*/}
			{/*								className="text-[#E84E4E] text-[12px]">오늘보다 늦은 날짜는 선택할 수 없어요.</p>*/}
			{/*						</div>*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div>*/}
			{/*		<button className="w-full h-[40px] bg-[#D9D9D9] rounded-[5px] text-white text-[12px] font-bold">*/}
			{/*			수정 완료*/}
			{/*		</button>*/}
			{/*	</div>*/}
			{/*</div>*/}

			{/*<div className="flex flex-col justify-between h-[600px]">*/}
			{/*	<div>*/}
			{/*		<div className="pb-[26px]">*/}
			{/*			<Image alt="화살표" src="/main/arrow2.png" width={7} height={14}/>*/}
			{/*		</div>*/}
			{/*		<div className="text-[24px] font-bold pb-[44px]">*/}
			{/*			연인 정보 수정하기*/}
			{/*		</div>*/}
			{/*		<div className="space-y-[22px]">*/}
			{/*			<InputComponent2 inputData={{data: nick, setData: setNick}} failText="" successText="" title="연인의 닉네임"*/}
			{/*											 placeHolder="사용할 닉네임을 입력해주세요"/>*/}
			{/*			<InputComponent2 inputData={{data: age, setData: setAge}} failText="" successText="" title="연인의 나이"*/}
			{/*											 placeHolder="나이를 입력해주세요"/>*/}
			{/*			<div>*/}
			{/*				<p className="pl-[6px] pb-[12px]">연인의 성별</p>*/}
			{/*				<div className="flex space-x-[20px] text-[14px] leading-[24px]">*/}
			{/*					<div className="flex items-center">*/}
			{/*						<input className="w-[16px] h-[16px]" name="gender" type="radio"/>*/}
			{/*						<p className="ml-[4px]">남성</p>*/}
			{/*					</div>*/}
			{/*					<div className="flex items-center">*/}
			{/*						<input className="w-[16px] h-[16px]" name="gender" type="radio"/>*/}
			{/*						<p className="ml-[4px]">여성</p>*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*	</div>*/}
			{/*	<div>*/}
			{/*		<button className="w-full h-[40px] bg-[#D9D9D9] rounded-[5px] text-white text-[12px] font-bold">*/}
			{/*			수정 완료*/}
			{/*		</button>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className="flex flex-col justify-between h-[600px]">*/}
			{/*	<div>*/}
			{/*		<div className="pb-[26px]">*/}
			{/*			<Image alt="화살표" src="/main/arrow2.png" width={7} height={14}/>*/}
			{/*		</div>*/}
			{/*		<div className="text-[24px] font-bold pb-[44px]">*/}
			{/*			내 정보 수정하기*/}
			{/*		</div>*/}
			{/*		<div className="space-y-[22px]">*/}
			{/*			<InputComponent2 inputData={{data: nick, setData: setNick}} failText="" successText="" title="닉네임"*/}
			{/*											 placeHolder="사용할 닉네임을 입력해주세요"/>*/}
			{/*			<InputComponent2 inputData={{data: age, setData: setAge}} failText="" successText="" title="나이"*/}
			{/*											 placeHolder="나이를 입력해주세요"/>*/}
			{/*			<div>*/}
			{/*				<p className="pl-[6px] pb-[12px]">성별</p>*/}
			{/*				<div className="flex space-x-[20px] text-[14px] leading-[24px]">*/}
			{/*					<div className="flex items-center">*/}
			{/*						<input className="w-[16px] h-[16px]" name="gender" type="radio"/>*/}
			{/*						<p className="ml-[4px]">남성</p>*/}
			{/*					</div>*/}
			{/*					<div className="flex items-center">*/}
			{/*						<input className="w-[16px] h-[16px]" name="gender" type="radio"/>*/}
			{/*						<p className="ml-[4px]">여성</p>*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}

			{/*	</div>*/}
			{/*	<div>*/}
			{/*		<button className="w-full h-[40px] bg-[#D9D9D9] rounded-[5px] text-white text-[12px] font-bold">*/}
			{/*			수정 완료*/}
			{/*		</button>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<div className="py-[74px]">
				<div className="flex flex-col items-center pb-[62px]">
					<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>
					<div className="flex items-center text-[16px] font-bold">
						<p>{userData.nickname}</p>
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
							className="border-b border-solid border-[#E2E2E2] w-[130px] text-center py-[5px] text-[14px]">
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
						<div
							className="border-b border-solid border-[#E2E2E2] w-[130px] text-center py-[5px] text-[14px] text-[#AAA]">
							회원코드
						</div>
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


			<div>
				<div className="flex flex-col items-center pb-[62px]">
					<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>
					<div className="flex items-center text-[16px] font-bold">
						<p>유저1</p>
						<Image className="" alt="하트" src={loveImage} width={36} height={36}/>
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
					</div>

				</div>
				<div
					className="flex flex-col py-[30px] px-[10px] border-b-[1px] border-solid border-[#777] items-center mb-[10px] space-y-[5px]">
					<Image src="/main/heart.png" alt="하트" height={80} width={80}/>
					<em className="text-[14px] text-center leading-[20px]">
						연인과 함께 애정연구소를 <br/>
						사용하고 있어요!
					</em>
				</div>

				<div className="flex flex-col px-[10px] py-[30px] mb-[10px]">
					<div className="flex flex-col items-center space-y-[10px]">
						<em className="text-[11px] leading-[16px] text-center text-[#AAA]">
							원하지 않은 회원과 연결됐나요?<br/>
							해당 회원과의 연결을 해제할 수 있어요.
						</em>
						<button className="w-[100px] h-[24px] bg-[#AAA] rounded-[5px] text-[11px] leading-[16px] text-white">
							연결하기
						</button>
					</div>
				</div>
			</div>


			<div>
				<div className="flex flex-col items-center pb-[62px]">
					<em className="text-[12px]">우리가 사랑한지 <em className="text-[13px] font-bold">101</em>일 째</em>
					<div className="flex items-center text-[16px] font-bold">
						<p>유저1</p>
						<Image className="" alt="하트" src={loveImage} width={36} height={36}/>
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
					</div>

				</div>
				<div
					className="flex flex-col py-[30px] px-[10px] items-center mb-[10px] space-y-[5px]">
					<Image src="/main/heart.png" alt="하트" height={80} width={80}/>
					<em className="text-[14px] text-center leading-[20px]">
						연인과 함께 애정연구소를 <br/>
						사용하고 있어요!
					</em>
				</div>

			</div>
		</div>
	);
}