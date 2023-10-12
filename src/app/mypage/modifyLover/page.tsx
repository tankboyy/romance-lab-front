'use client';

import React, {useState} from 'react';
import Image from "next/image";
import InputComponent2 from "../../../components/free/InputComponent2";

type propsType = {};

export default function Page(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-screen h-[100vh] p-[20px] pb-[70px]">
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="pb-[26px]">
						<Image alt="화살표" src="/main/arrow2.png" width={7} height={14}/>
					</div>
					<div className="text-[24px] font-bold pb-[44px]">
						연인 정보 수정하기
					</div>
					<div className="space-y-[22px]">
						<InputComponent2 inputData={{data: nick, setData: setNick}} failText="" successText="" title="연인의 닉네임"
														 placeHolder="사용할 닉네임을 입력해주세요"/>
						<InputComponent2 inputData={{data: age, setData: setAge}} failText="" successText="" title="연인의 나이"
														 placeHolder="나이를 입력해주세요"/>
						<div>
							<p className="pl-[6px] pb-[12px]">연인의 성별</p>
							<div className="flex space-x-[20px] text-[14px] leading-[24px]">
								<div className="flex items-center">
									<input className="w-[16px] h-[16px]" name="gender" type="radio"/>
									<p className="ml-[4px]">남성</p>
								</div>
								<div className="flex items-center">
									<input className="w-[16px] h-[16px]" name="gender" type="radio"/>
									<p className="ml-[4px]">여성</p>
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
		</div>
	);
}