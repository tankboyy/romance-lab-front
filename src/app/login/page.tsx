"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import loginImage from '../../../public/login/icon.png';
import kakaoBtn from '../../../public/login/kakao.png';
import googleIcon from '../../../public/login/google.png';
import Link from "next/link";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";
import {usePathname} from "next/navigation";

export default function Home() {
	async function onClickGoogleLogin() {
		await fetch('http://localhost:8080/api/oauth/kakao?code=h6L10mRYNWr_vwJJ8a_SDZ1JI38eoV7NGmWraRYgCj1y6gAAAYo6shEd');
	}

	return (
		<main className="py-[20px]">
			<div className="text-center py-[100px] flex flex-col justify-center items-center text-[20px] my-auto">
				<Image className="mb-[20px]" alt="메인" src={loginImage}/>
				<p className="text-[24px] pb-[10px] font-extrabold">애정연구소</p>
				<p className="text-[16px] font-normal">더 깊고 풍부한 애정을 연구하다</p>
			</div>
			<div className="flex flex-col pb-[16px] items-center">
				<div className="w-full px-[20px]">
					<button
						onClick={onClickGoogleLogin}
						className="flex h-[44px] justify-center items-center rounded-[5px] border-[1px] border-[solid] border-[#E9E9E9] bg-[#FFF] shadow-login mb-[14px] w-full">
						<Image src={googleIcon} alt="구글"/>
						<p className="ml-[6px] font-bold text-[16px]">구글로 계속하기</p>
					</button>
				</div>
				<div className="px-[20px] w-full pb-[20px]">
					<button
						className="rounded-[5px] h-[44px] w-full bg-[#FFF500] shadow-login flex items-center justify-center"
						onClick={() => signIn('kakao', {
							redirect: false,
							callbackUrl: '/login/email',

						})}>
						<Image alt="카카오" src={kakaoBtn}/>
						<p className="pl-[4px] font-bold text-[16px] text-center">카카오로 계속하기</p>
					</button>
				</div>
				<div>
					<Link href="login/email"
								className="cursor-pointer text-[14px] text-center text-[#AAAAAA] underline underline-offset-2"
					>이메일로 계속하기</Link>
				</div>
			</div>
		</main>
	);
}