'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import loveImage from "../../public/main/love.png";
import wariImage from '../../public/main/wari.png';
import {useRouter} from "next/navigation";
import Activity from "@/_component/mypage/main/activity";
import Emotion from "@/_component/mypage/main/emotion";
import Location from "@/_component/mypage/main/location";
import {useRecoilState} from "recoil";
import {coupleDataState, userDataState} from "@/recoil/atoms";

type propsType = {};


export default function MainComponent(props: propsType) {
	const [warning, setWarning] = useState(false);
	const [userData, setUserData] = useRecoilState(userDataState);
	const [coupleData, setCoupleData] = useRecoilState(coupleDataState);
	const router = useRouter();


	useEffect(() => {
		const userToken = localStorage.getItem('token');
		const getUserData = async () => {
			await fetch('api/members/me', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			}).then(async (res) => {
				const data = await res.json();
				setUserData(data);
			});
		};

		const getCoupleData = async () => {
			await fetch('api/couples/info/ASDFGH', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			}).then(async (res) => {
				const data = await res.json();
				setCoupleData(data);
			});
		};
		if (!userToken) {
			router.push('/login');
		} else {
			getUserData();
			getCoupleData();
		}
	}, []);

	const popup = () => {
		setWarning(true);
		document.body.style.overflow = "hidden";
	};

	const closePopup = () => {
		setWarning(false);
		document.body.style.overflow = "unset";
	};
	return (
		<div className="w-full relative h-full">
			<div className="flex flex-col items-end justify-end pb-[40px]">
				<div className="flex items-center text-[12px] font-bold">
					<p>{userData.nickname}</p>
					<Image className="" alt="하트" src={loveImage} width={24} height={24}/>
					<p>{coupleData.nickname}</p>
				</div>
				<div className="flex items-center text-[12px] text-center relative">
					<div>
						<Image onClick={popup} className="peer cursor-pointer" src={wariImage}
									 alt="위험해"/>
						{
							warning &&
              <div>
                <div onClick={closePopup} className="fixed left-0 top-0 w-full h-full z-20">
                </div>
                <div
                  className="border-[#EE404C] z-30 w-[206px] h-[96px] border-[1px] border-solid mt-[4px] rounded-[5px] absolute right-0 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  <p className="text-left text-[11px] leading-[16px] p-[8px]">
                    연인과 정보가 연결되지 않았어요. <br/>
                    정보를 연결하면 연구결과를 함께 공유할 수 있어요.
                  </p>
                  <button
                    className="w-[190px] bg-[#3668EA] h-[24px] px-[8px] rounded-[5px] text-white text-[11px] font-bold leading-[16px]"
                    onClick={() => router.push('/mypage')}
                  >

                    연결하러 가기
                  </button>
                </div>
              </div>
						}
					</div>
					<p>
						연구를 시작한 지 <em className="text-[14px] font-bold">32</em>일 째
					</p>
				</div>
			</div>

			<Activity/>
			<Emotion/>
			<Location/>
		</div>
	);
}