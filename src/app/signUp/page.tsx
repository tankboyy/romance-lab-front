"use client"

import React, {useState} from 'react';

type propsType = {
  
};

export default function Home(props: propsType) {
  const [step, setStep] = useState<"회원가입" | "로그인">("회원가입")
  return (
    <div>
      <div className="flex items-center justify-center text-[18px]">
        <p className={`${step === '회원가입' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>회원가입</p>
        <p className={`${step === '로그인' ? "mx-[10px] text-[#000] underline underline-offset-1" : "mx-[10px] text-[#AAA]"}`}>로그인</p>
      </div>
      <div
        className="justify-center items-center text-center"
      >
        <div className="flex flex-col">
          <p className="text-[14px] text-left">이메일</p>
          <input type="email"/>
        </div>
      </div>
    </div>
  );
}