'use client';

import React, {useState} from 'react';
import Image from "next/image";
import InputComponent2 from "../../../../../_component/free/InputComponent2";

type propsType = {};

export default function Page(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const onClickSpan = (name: string) => {
		document.getElementById(name)?.click();
	};

	return (
		<div className="flex flex-col h-full p-[20px] pb-[70px]">
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="text-[24px] font-bold pb-[44px]">
						연인 정보 수정하기
					</div>
					<div className="space-y-[22px]">
						<InputComponent2 inputData={{data: nick, setData: setNick}} failText="" successText="" title="연인의 닉네임"
														 placeHolder="사용할 닉네임을 입력해주세요"/>
						<InputComponent2 inputData={{data: age, setData: setAge}} failText="" successText="" title="연인의 나이"
														 placeHolder="나이를 입력해주세요"/>
						<div className="pt-[2px]">
							<p className="pl-[6px] pb-[12px]">성별</p>
							<div className="radio">
								<div className="flex space-x-[20px] text-[14px] leading-[24px]">
									<div className="flex items-center cursor-pointer">
										<div className="relative flex">
											<input name="gender" value="male" type="radio"
														 onClick={() => setGender("남자")}
														 id="man"
														 className="peer checked:border-[0.1em] checked:border-blue-700 appearance-none w-[18px] h-[18px] rounded-[50%] border-[1px] border-solid border-[#000]"
											/>
											<div
												className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible peer-checked:visible bg-blue-700 w-[10px] h-[10px] rounded-[50%]"></div>
										</div>
										<span className="ml-[4px] cursor-pointer" onClick={() => onClickSpan('man')}>남성</span>
									</div>
									<div className="flex items-center cursor-pointer">
										<div className="relative flex">
											<input name="gender" value="female"
														 onClick={() => setGender("여자")}
														 type="radio"
														 id="girl"
														 className="peer checked:border-[0.1em] checked:border-red-600 appearance-none w-[18px] h-[18px] rounded-[50%] border-[1px] border-solid border-[#000]"
											/>
											<div
												className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible peer-checked:visible bg-red-600 w-[10px] h-[10px] rounded-[50%]"></div>
										</div>
										<span className="ml-[4px] cursor-pointer" onClick={() => onClickSpan('girl')}
										>여성</span>


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
		</div>
	);
}