'use client';

import React, {useState} from 'react';
import Image from "next/image";
import arrow from "/public/main/arrow3.png";
import SignUpComponent from "../../../_component/login/email/signUPComponent";
import LoginComponent from "../../../_component/login/email/loginComponent";
import BackNav from "@/_component/free/backNav";

type propsType = {};

export default function Page(props: propsType) {
	const [step, setStep] = useState<"회원가입" | "로그인">("로그인");

	return (
		<main className="p-[20px]">
			<div className="pb-[20px]">
				<BackNav/>
			</div>
			<div>
				<div className="justify-center text-[18px] font-bold flex space-x-[20px] pb-[40px]">
					<div
						onClick={() => setStep("회원가입")}
						className={`${step === '회원가입' ? "cursor-pointer leading-[32px]  text-[#000] underline " : "cursor-pointer leading-[32px] text-[#AAA]"}`}>회원가입
					</div>
					<div
						onClick={() => setStep("로그인")}
						className={`${step === '로그인' ? "cursor-pointer leading-[32px] text-[#000] underline " : "cursor-pointer leading-[32px] text-[#AAA]"}`}>로그인
					</div>
				</div>
			</div>
			{step === "회원가입" ?
				<SignUpComponent/>
				: <LoginComponent/>
			}
		</main>
	);
}