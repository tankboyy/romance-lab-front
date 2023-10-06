'use client';

import React, {useState} from 'react';
import InputComponent from "../../../components/free/InputComponent";

type propsType = {};

export default function Page(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	return (
		<div className="max-w-[420px] max-h-[1000px] bg-white flex flex-col w-[100vh] h-[100vh]">
			<div className="flex flex-col justify-between h-full px-[20px]">
				<div>
					<div className="pb-[44px]">
						<p className="font-bold leading-8 text-[24px] pb-[10px]">
							회원정보 입력하기
						</p>
						<p>
							<em className="text-[14px] leading-[24px]">
								연구를 시작하기 전에, <br/>
								여러분의 정보를 입력해주세요!
							</em>
						</p>
					</div>
					<div className="text-[14px] space-y-[20px]">
						<InputComponent inputData={{data: nick, setData: setNick}} failText="" successText="" title="닉네임"/>
						<InputComponent inputData={{data: age, setData: setAge}} failText="" successText="" title="나이"/>
						<div>
							<p className="pl-[6px] pb-[12px]">성별</p>
							<div className="flex space-x-[20px] text-[14px] leading-[24px]">
								<div className="flex">
									<input name="gender" type="radio"/>
									<p className="ml-[4px]">남성</p>
								</div>
								<div className="flex">
									<input name="gender" type="radio"/>
									<p className="ml-[4px]">여성</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center pb-[20px]">
					<button
						className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]"
						// disabled={true}
						// onClick={() => props.setStep(2)}
					>
						<p>다음 단계로</p>
					</button>
				</div>
			</div>

		</div>
	);
}