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
		<div className="w-[375px] h-[667px] relative">
			<div className="flex items-center justify-center text-[18px]">
				<p
					onClick={() => setStep("회원가입")}
					className={`${step === '회원가입' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>회원가입</p>
				<p
					onClick={() => setStep("로그인")}
					className={`${step === '로그인' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>로그인</p>
			</div>
			{step === "회원가입" ?
				<SignUpComponent/>
				: <LoginComponent/>
			}
		</div>
	);
}