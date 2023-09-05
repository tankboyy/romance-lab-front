'use client';

import React from 'react';
import InputComponent from "./inputComponent";

type propsType = {
	setStep: (value: (((prevState: number) => number) | number)) => void;
};

export default function OneStep(props: propsType) {
	return (
		<div>
			<div className="text-[14px]">
				<p className="text-[24px] mb-1">
					회원정보 입력하기
				</p>
				<p>
					연구를 시작하기 전에,
				</p>
				<p>여러분의 정보를 입력해주세요!</p>
			</div>
			<div className="mt-[40px] text-[14px]">
				<InputComponent failText="" successText="" title="닉네임" min={2} max={6}/>
				<InputComponent failText="" successText="" title="나이"/>
				<div className="pl-[10px]">
					<p className="mb-[6px]">성별</p>
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
			</div>
			<div className="flex justify-center">
				<button
					className="w-5/6 h-[40px] rounded-[5px] bg-[#3668EA] absolute bottom-3 text-[#FFF] text-[12px]"
					// disabled={true}
					onClick={() => props.setStep(2)}
				>
					<p>다음 단계로</p>
				</button>
			</div>
		</div>
	);
}