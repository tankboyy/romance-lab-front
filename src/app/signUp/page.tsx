"use client";

import React, {useState} from 'react';
import InputComponent from "./InputComponent";
import PasswordComponent from "./passwordComponent";
import LoginComponent from "./loginComponent";
import SignUpComponent from "./signUPComponent";

type propsType = {};

export default function Home(props: propsType) {
	const [step, setStep] = useState<"회원가입" | "로그인">("회원가입");

	return (
		<div className="max-w-[420px] max-h-[1000px] bg-white flex flex-col w-[100vh] h-[100vh] px-[20px]">
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