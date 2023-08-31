"use client"
import React from 'react';
import Image from 'next/image'
import loginImage from '../../../public/login/icon.png'
import kakaoBtn from '../../../public/login/kakao.png'
import googleIcon from '../../../public/login/google.png'

type propsType = {

};

export default function Home(props: propsType) {
  return (
    <div className="w-[390px] h-[667px]">
      <div className="text-center flex flex-col items-center text-[20px] my-[70px]">
        <Image className="mb-[31px]" alt="양이에오" src={loginImage}/>
        <p className="text-[24px] font-bold">애정연구소</p>
        <p className="text-[16px]">더 깊고 풍부한 애정을 연구하다</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <button className="flex justify-center items-center w-[330px] h-[44px] rounded-[5px] border-[1px] border-[solid] border-[#E9E9E9] bg-[#FFF] shadow-login mb-[14px]">
            <Image src={googleIcon} alt="구글"/>
            <p className="ml-[6px] text-[18px]">구글로 계속하기</p>
          </button>
        </div>
        <div>
          <button>
            <Image alt="카카오" src={kakaoBtn}/>
          </button>
        </div>
        <div>
          <p className="text-[14px] text-center text-[#AAAAAA] underline underline-offset-2">이메일로 계속하기</p>
        </div>
      </div>
    </div>
  );
}

