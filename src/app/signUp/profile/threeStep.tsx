'use client';

import React, {useState} from 'react';
import InputComponent from "../InputComponent";

type propsType = {};

export default function ThreeStep(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	const [date, setDate] = useState();
	return (
		<div className="flex flex-col justify-between h-full p-[20px]">
			<div>
				<div className="text-[14px] mb-[40px]">
					<p className="text-[24px] font-bold leading-[32px] pb-[10px]">
						회원정보 입력하기
					</p>
					<em className="leading-[24px] text-[14px]">
						연구를 시작하기 전에, <br/>
						여러분의 정보를 입력해주세요!
					</em>
				</div>
				<div className="space-y-[24px]">

					<InputComponent inputData={{data: nick, setData: setNick}} failText="" successText="" title="연인의 닉네임"
													placeHolder="연인의 닉네임을 입력해주세요"/>
					<InputComponent inputData={{data: age, setData: setAge}} failText="" successText="" title="연인의 나이"
													placeHolder="연인의 나이를 입력해주세요"/>
					<div className="pl-[10px] pb-[20px]">
						<p className="mb-[6px]">연인의 성별</p>
						<div className="items-start flex space-x-[20px]">
							<div className="flex">
								<input name="gender" type="radio"/>
								<p className="ml-1">남성</p>
							</div>
							<div className="flex">
								<input name="gender" type="radio"/>
								<p className="ml-1">여성</p>
							</div>
						</div>
					</div>
					<InputComponent inputData={{data: date, setData: setDate}} failText="" successText="" title="연애 시작날짜"
													placeHolder="여러분의 사랑이 시작된 날짜를 입력해주세요"/>
				</div>
			</div>
			<div className="flex">
				<button
					className={!true ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]" : "w-full h-[40px] rounded-[5px] bg-[#D9D9D9] text-[#FFF] text-[12px]"}
					disabled={true}
					onClick={() => alert("끝")}
				>
					<p>회원정보 입력 완료하기</p>
				</button>
			</div>

		</div>
	);
}