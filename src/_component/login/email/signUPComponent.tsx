import React, {forwardRef, useEffect, useRef, useState} from 'react';
import InputComponent from "../../free/InputComponent";
import {useRouter} from "next/navigation";

type propsType = {};
export default function SignUpComponent(props: propsType) {
	const [auth, setAuth] = useState(false);
	const [clear, setClear] = useState(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [authNumber, setAuthNumber] = useState<string>("");
	const [successNumber, setSuccessNumber] = useState(false);
	const [authText, setAuthText] = useState("");
	const router = useRouter();

	const authNumberDivRef = useRef(null);

	useEffect(() => {
		if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
			successNumber && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/.test(password)
		) {
			setClear(true);
		} else setClear(false);
	}, [email, password, authNumber]);

	const onAuthReq = async () => {
		setAuth(true);
		await fetch(`http://localhost:8080/api/members/emails/verification/send?email=${email}`, {
			method: "POST"
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	};

	useEffect(() => {
		async function checkAuthNumber() {
			await fetch(`http://localhost:8080/api/members/emails/verification/check?email=${email}&code=${authNumber}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			}).then(res => res.json())
				.then(res => {
					console.log(res.message, "res.message");
					if (res.message === '성공') {
						setSuccessNumber(() => true);
						setAuthText("이메일이 인증됐습니다");
					}
				});
		}

		if (authNumber.length === 6) {
			checkAuthNumber();
		} else setSuccessNumber(false);
	}, [authNumber, successNumber]);


	const handleSignUp = async () => {
		await fetch(`http://localhost:8080/api/members/join`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password,
			})
		})
			.then(res => res.json())
			.then(res => {
				// 로그인성공
				if (res.memberCode) {
					localStorage.setItem("memberCode", res.memberCode);
					localStorage.setItem("memberEmail", res.email);
					router.replace('/sign/step1');
				} else if (res.code === "ALREADY_MEMBER") {
					alert("이미 가입된 이메일입니다.");
				}
			})
			.catch(err => {
				console.log(err);
				alert("다시 시도해주세요.");
			});
	};


	return (
		<div className="flex flex-col h-full justify-between">
			<div className="space-y-[20px]">
				<div className="relative">
					<InputComponent inputData={{data: email, setData: setEmail}}
													placeHolder="이메일을 입력해주세요"
													title="이메일"
													successText=""
													checks={[{
														condition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
														str: "유효하지 않은 이메일이에요"
													}]}
					/>
					<div
						className={`absolute bottom-[31px] right-0 transition-all duration-300 ${/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "opacity-100" : "opacity-0"}`}>
						<button className="font-bold text-[11px] text-white bg-[#3668EA] w-[50px] h-[20px] rounded-[5px]"
										onClick={onAuthReq}
										disabled={auth}
						>
							인증요청
						</button>
					</div>
				</div>
				{
					auth &&
          <div className={`animate-transition`}>

            <InputComponent inputData={{data: authNumber, setData: setAuthNumber}} placeHolder="인증번호를 입력해주세요"
                            type="number"
                            checks={[{
															condition: !successNumber,
															str: "유효하지 않은 인증번호에요"
														}]}
                            title="인증번호" successText={
							successNumber ? "이메일이 인증됐어요" : undefined
						}/>
          </div>
				}
				<InputComponent placeHolder="비밀번호를 입력해주세요" inputData={{data: password, setData: setPassword}} title="비밀번호"
												type="password"
												checks={[{
													condition: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/, str: "최소 8글자 이상 입력해주세요"
												}]}
												successText=""/>
			</div>
			<div className="flex justify-center pb-[2px]">
				<button
					className={`${clear ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
					disabled={!clear}
					onClick={handleSignUp}
				>
					<p> 가입 완료하기</p>
				</button>
			</div>
		</div>
	);
}