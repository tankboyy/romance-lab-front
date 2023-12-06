import InputComponent2 from "@/_component/free/InputComponent2";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Main() {
	const [nick, setNick] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("남자");
	const [success, setSuccess] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const userToken = localStorage.getItem('token');
		const getUserData = async () => {
			await fetch('/api/members/me', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			}).then(async (res) => {
				const data = await res.json();
				setNick(data.nickname);
				setAge(data.age);
			});
		};
		getUserData();
	}, []);

	useEffect(() => {
		if (nick.length === 0 && parseInt(age) < 20) {
			setSuccess(false);
			return;
		} else setSuccess(true);
	}, [nick, age, gender]);

	const onClickSpan = (name: string) => {
		document.getElementById(name)?.click();
	};

	function handleLastStep() {
		// 정보 업데이트 api
		setTimeout(() => {
			router.push('/mypage');
		}, 500);
	}

	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				<div className="text-[24px] font-bold pb-[44px]">
					내 정보 수정하기
				</div>
				<div className="space-y-[22px]">
					<InputComponent2 inputData={{data: nick, setData: setNick}} failText="" successText="" title="닉네임"
													 placeHolder="사용할 닉네임을 입력해주세요"/>
					<InputComponent2 inputData={{data: age, setData: setAge}} failText="" successText="" title="나이"
													 placeHolder="나이를 입력해주세요"/>
					<div className=" pb-[20px]">
						<p className="pl-[6px] pb-[12px]">성별</p>
						<div className="radio">
							<div className="flex space-x-[20px] text-[14px] leading-[24px]">
								<div className="flex items-center cursor-pointer">
									<div className="relative flex">
										<input name="gender" value="male" type="radio"
													 checked={gender === "남자"}
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
													 checked={gender === "여자"}
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
				</div>

			</div>
			<div className="flex justify-center pb-[2px]">
				<button
					className={`${success ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
					disabled={!success}
					onClick={handleLastStep}
				>
					<p>수정 완료</p>
				</button>
			</div>
		</div>
	);
}