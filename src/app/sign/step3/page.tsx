'use client';
import React, {useEffect, useState} from 'react';
import InputComponent from "../../../components/free/InputComponent";
import Image from "next/image";
import arrow from "/public/main/arrow3.png";
import {useRecoilState} from "recoil";
import {userState} from "../../../recoil/atoms";
import {useRouter} from "next/navigation";

type propsType = {};

export default function Page(props: propsType) {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [clear, setClear] = useState(false);
	const [user, setUser] = useRecoilState(userState);
	const [date, setDate] = useState<any>();
	const router = useRouter();

	useEffect(() => {
		if (/^[가-힣ㄱ-ㅎA-Za-z0-9]*$/.test(nick) && /^(?:[1-9]|[1-9]\d|99)$/.test(age) && gender !== "" && parseInt(age) > 17 && new Date(date) <= new Date()) {
			setClear(true);
		} else setClear(false);
	}, [nick, age, gender, date]);

	const handleNextStep = () => {
		setUser((prev) => {
			return {
				me: {
					name: prev.me.name,
					age: prev.me.age,
					gender: prev.me.gender
				},
				you: {
					name: nick,
					age: age,
					gender: gender
				},
				date: date
			};
		});
		router.push('/');
	};
	const onClickSpan = (name: string) => {
		document.getElementById(name)?.click();
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
					<div className="text-[14px] mb-[40px]">
						<p className="text-[24px] font-bold leading-[32px] pb-[10px]">
							회원정보 입력하기
						</p>
						<em className="leading-[24px] text-[14px]">
							연구를 시작하기 전에, <br/>
							여러분의 정보를 입력해주세요!
						</em>
					</div>
					<div className="space-y-[24px]">

						<InputComponent inputData={{data: nick, setData: setNick}}
														placeHolder="연인의 닉네임을 입력해주세요"
														checks={[
															{
																condition: /^[가-힣ㄱ-ㅎA-Za-z0-9]*$/,
																str: "특수문자는 사용할 수 없어요"
															}
														]}
														successText="" title="연인의 닉네임"/>

						<InputComponent inputData={{data: age, setData: setAge}} successText=""
														placeHolder="연인의 나이를 입력해주세요"
														type="number"
														checks={[
															{
																condition: /^(?:[1-9]|[1-9]\d|99)$/,
																str: "최대 99살까지 입력할 수 있어요"
															},
															{
																condition: parseInt(age) <= 17,
																str: "최소 17살부터 입력할 수 있어요"
															}
														]}
														title="연인의 나이"/>
						<div className=" pb-[20px]">
							<p className="pl-[6px] pb-[12px]">연인의 성별</p>
							<div className="radio">
								<div className="flex space-x-[20px] text-[14px] leading-[24px]">
									<div className="flex items-center cursor-pointer">
										<div className="relative flex">
											<input name="gender" value="male" type="radio"
														 onClick={() => setGender("남자")}
														 id="man"
														 className="peer checked:border-[0.1em] checked:border-blue-700 appearance-none w-[18px] h-[18px] rounded-[50%] border-[1px] border-solid border-[#000]"
											/>
											<div
												className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible peer-checked:visible bg-blue-700 w-[10px] h-[10px] rounded-[50%]"></div>
										</div>
										<span className="ml-[4px] cursor-pointer" onClick={() => onClickSpan('man')}>남성</span>
									</div>
									<div className="flex items-center cursor-pointer">
										<div className="relative flex">
											<input name="gender" value="female"
														 onClick={() => setGender("여자")}
														 type="radio"
														 id="girl"
														 className="peer checked:border-[0.1em] checked:border-red-600 appearance-none w-[18px] h-[18px] rounded-[50%] border-[1px] border-solid border-[#000]"
											/>
											<div
												className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible peer-checked:visible bg-red-600 w-[10px] h-[10px] rounded-[50%]"></div>
										</div>
										<span className="ml-[4px] cursor-pointer" onClick={() => onClickSpan('girl')}
										>여성</span>


									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<div className="flex flex-col w-full">
								<label className="text-left text-[14px] pl-[4px] pb-[10px]">연애 시작날짜</label>
								<div className="flex relative pb-[22px]">
									<input
										type="date"
										required
										// aria-required={true}
										onChange={(e) => setDate(e.target.value)}
										data-placeholder="여러분의 사랑이 시작된 날짜를 입력해주세요"
										className="w-full p-[10px] leading-3 h-[30px] focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
									/>
									<div className="pl-[10px] pt-[10px] absolute bottom-0">
										<p
											className="text-[#E84E4E] text-[12px]">{
											new Date(date) > new Date() ? "오늘보다 늦은 날짜는 선택할 수 없어요" : ""
										}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center pb-[2px]">
				<button
					className={`${clear ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
					disabled={!clear}
					onClick={handleNextStep}
				>
					<p> 회원정보 입력 완료하기</p>
				</button>
			</div>

		</div>
	);
}