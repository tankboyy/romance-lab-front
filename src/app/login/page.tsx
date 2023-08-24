"use client"
import React from 'react';
import Image from 'next/image'
import loginImage from '../../../public/loginImage.png'

type propsType = {

};

export default function Home(props: propsType) {
  return (
    <div className="w-[390px] h-[667px]">
      <div className="text-center flex flex-col items-center text-[20px] my-[70px]">
        <p>우리의 이야기로 배부르게</p>
        <p>우리의 감정으로 행복하게</p>
        <Image className="my-[18px]" alt="양이에오" src={loginImage}/>
        <p className="text-[24px]">애정염소</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <button className="w-[330px] h-[50px] rounded-[5px] border-[1px] border-[solid] border-[#E9E9E9] bg-[#FFF] shadow-login mb-[20px]">
            <p className="text-[18px]">구글로 계속하기</p>
          </button>
        </div>
        <div>
          <button className="w-[330px] h-[50px] rounded-[5px] bg-[#FFF500] shadow-login mb-[30px]">
            <p className="text-[18px]">카카오로 계속하기</p>
          </button>
        </div>
        <div>
          <p className="text-[14px] text-center text-[#AAAAAA] underline underline-offset-2">이메일로 계속하기</p>
        </div>
      </div>
    </div>
  );
}

