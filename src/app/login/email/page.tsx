'use client';

import React, {useState} from 'react';
import Image from "next/image";
import arrow from "/public/main/arrow3.png";
import SignUpComponent from "./signUPComponent";
import LoginComponent from "./loginComponent";

type propsType = {};

export default function Page(props: propsType) {
	const [step, setStep] = useState<"회원가입" | "로그인">("회원가입");

	return (
		<div className="max-w-[420px] max-h-[1000px] bg-white flex flex-col w-[100vh] h-[100vh] p-[20px]">
			<div className="mb-[20px]">
				<Image alt="화살표" src={arrow}/>
			</div>
			<div className="justify-center text-[18px] font-bold flex space-x-[20px] pb-[40px]">
				<a
					onClick={() => setStep("회원가입")}
					className={`${step === '회원가입' ? "cursor-pointer leading-[32px]  text-[#000] underline " : "cursor-pointer leading-[32px] text-[#AAA]"}`}>회원가입</a>
				<a
					onClick={() => setStep("로그인")}
					className={`${step === '로그인' ? "cursor-pointer leading-[32px] text-[#000] underline " : "cursor-pointer leading-[32px] text-[#AAA]"}`}>로그인</a>
			</div>
			{step === "회원가입" ?
				<SignUpComponent/>
				: <LoginComponent/>
			}
		</div>
	);
}