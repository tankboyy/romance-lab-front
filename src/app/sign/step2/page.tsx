'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import arrow from "/public/main/arrow3.png";
import {useRecoilState} from "recoil";
import {userState} from "../../../recoil/atoms";
import {useRouter} from "next/navigation";
import InputComponent from "../../../components/free/InputComponent";

type propsType = {};

export default function Page(props: propsType) {
	const [already, setAlready] = useState(false);
	const [auth, setAuthCode] = useState("");
	const [checking, setChecking] = useState(false);
	const [clear, setClear] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const router = useRouter();


	useEffect(() => {
		if (auth.length !== 6) {
			setClear(false);
		}
		if (!already) setClear(true);
		if (checking) setClear(true);
	}, [already, checking, auth]);


	const handleNextStep = () => {
		setUser((prev) => {
			return {
				me: {
					name: prev.me.name,
					age: prev.me.age,
					gender: prev.me.gender
				},
				you: {
					name: '',
					age: '',
					gender: ''
				},
				date: ""
			};
		});
		if (already) {

			router.push('/');
		} else {
			router.push('/sign/step3');
		}
	};

	const onAuthReq = () => {
		console.log(auth);
		if (auth === "123456") {
			setChecking(true);
		}
	};

	return (
		<div className="max-w-[420px] min-h-screen bg-white flex flex-col w-[100vw] h-[100vh] p-[20px]">
			<div className="mb-[26px]">
				<button>
					<Image alt="화살표" src={arrow}/>
				</button>
			</div>
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="text-[14px] mb-[40px] space-y-[10px] leading-[32px]">
						<p className="text-[24px] font-bold">
							회원정보 입력하기
						</p>
						<p className="leading-[24px]">
							연구를 시작하기 전에, <br/>
							여러분의 정보를 입력해주세요!
						</p>
					</div>
					<div className="text-center mb-[44px]">
						<p className="text-[16px] leading-[24px] pb-[17px]">연인이 이미 애정연구소를 이용하고 있나요?</p>
						<div className="flex justify-center space-x-[10px] text-[16px] font-bold leading-[24px]">
							<button
								className={already ? "w-3/6 h-[40px] rounded-[5px] border-[1px] border-black border-solid" : "w-3/6 h-[40px] rounded-[5px] border-[1px] border-[#E2E2E2] border-solid text-[#AAA]"}
								onClick={() => setAlready(true)}
							>
								<p>
									예
								</p>
							</button>
							<button
								className={!already ? "w-3/6 h-[40px] rounded-[5px] border-[1px] border-black border-solid" : "w-3/6 h-[40px] rounded-[5px] border-[1px] border-[#E2E2E2] border-solid text-[#AAA]"}
								onClick={() => setAlready(false)}
							>
								<p>
									아니요
								</p>
							</button>
						</div>
					</div>
					{
						already &&
            <div>
              <div className="relative">
                <InputComponent inputData={{data: auth, setData: setAuthCode}}
                                placeHolder="연인의 회원코드를 입력해주세요"
                                type="number"
                                max={6}
                                title="회원코드"
                                successText={`${checking ? "회원코드가 인증됐어요" : ""}`}
                                checks={[{
																	condition: !checking,
																	str: "회원코드가 유효하지 않아요"
																}]}
                />
                <div
                  className={`absolute bottom-[31px] right-0 transition-all duration-300 ${auth.length === 6 ? "opacity-100" : "opacity-0"}`}>
                  <button
                    className="font-bold text-[11px] text-white bg-[#3668EA] w-[50px] h-[20px] rounded-[5px]"
                    onClick={onAuthReq}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
					}
				</div>
				<div className="flex justify-center pb-[2px]">
					<button
						className={`${clear ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
						disabled={!clear}
						onClick={handleNextStep}
					>
						<p> {`${already ? "회원정보 입력 완료하기" : '다음 단계로'}`}</p>
					</button>
				</div>
			</div>
		</div>
	);
}