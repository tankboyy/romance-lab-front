"use client"

import React, {useState} from 'react';
import InputComponent from "./InputComponent";

type propsType = {};

export default function Home(props: propsType) {
  const [step, setStep] = useState<"회원가입" | "로그인">("회원가입")
  return (
    <div>
      <div className="flex items-center justify-center text-[18px]">
        <p
          className={`${step === '회원가입' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>회원가입</p>
        <p
          className={`${step === '로그인' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>로그인</p>
      </div>
      <InputComponent title="이메일" failText="유효하지 않은 이메일이에요" successText="몰라"/>
    </div>
  );
}