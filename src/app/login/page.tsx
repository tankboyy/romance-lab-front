"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import loginImage from '../../../public/login/icon.png';
import kakaoBtn from '../../../public/login/kakao.png';
import googleIcon from '../../../public/login/google.png';
import Link from "next/link";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";
import {usePathname} from "next/navigation";

type propsType = {};

const ColorButton = (props: any) => {
	return <button onClick={props.onClick}>{props.text}</button>;
};


export default function Home(props: propsType) {

	const pathName = usePathname();
	const {data: session} = useSession();

	const [providers, setProviders] = useState(null);

	useEffect(() => {
		(async () => {
			const res: any = await getProviders();
			console.log(res);
			setProviders(res);
		})();
	}, []);


	const kakaoInit = () => {
		const kakao = (window as any).Kakao;
		console.log(kakao.isInitialized());
		if (!kakao.isInitialized()) kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
		return kakao;
	};

	const kakaoLogin = async () => {
		const kakao = kakaoInit();

		kakao.API.request({
			url: '/v2/user/me',
			success: (res: any) => {
				console.log(res);
				// if(res.kakao_account.email)
			},
			fail: (err: any) => {
				console.log(err);
			}
		});
	};


	return (
		<div className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] h-[100vh] justify-between pb-[36px]">
			<div className="text-center py-[100px] flex flex-col justify-center items-center text-[20px] my-auto">
				<Image className="mb-[20px]" alt="메인" src={loginImage}/>
				<p className="text-[24px] pb-[10px] font-extrabold">애정연구소</p>
				<p className="text-[16px] font-normal">더 깊고 풍부한 애정을 연구하다</p>
			</div>
			<div className="flex flex-col pb-[16px] items-center">
				<div className="w-full px-[20px]">
					<button
						onClick={() => signIn('google', {
							redirect: false,
							callbackUrl: '/login/email'
						})}
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
		</div>
	);
}