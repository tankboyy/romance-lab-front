import React, {forwardRef, useEffect, useRef, useState} from 'react';
import InputComponent from "./InputComponent";

type propsType = {};
export default function SignUpComponent(props: propsType) {
	const [auth, setAuth] = useState(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [authNumber, setAuthNumber] = useState<string>("");

	useEffect(() => {
		console.log(email);
	}, [email]);


	return (
		<div className="flex flex-col h-full justify-between">
			<div className="space-y-[20px]">
				<div className="relative">
					<InputComponent setAuth={setAuth} inputData={{data: email, setData: setEmail}}
													placeHolder="이메일을 입력해주세요"
													title="이메일"
													successText=""
													checks={[{
														condition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
														str: "유효하지 않은 이메일이에요"
													}]}
					/>
					{/*{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&*/}
					<div
						className={`absolute bottom-[31px] right-0 transition-all duration-300 ${/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "opacity-100" : "opacity-0"}`}>
						<button className="font-bold text-[11px] text-white bg-[#3668EA] w-[50px] h-[20px] rounded-[5px]">
							인증요청
						</button>
					</div>
					{/*}*/}
				</div>
				{auth && <InputComponent inputData={{data: authNumber, setData: setAuthNumber}} placeHolder="인증번호를 입력해주세요"
                                 title="인증번호" type="number"
                                 successText=""/>}
				<InputComponent placeHolder="비밀번호를 입력해주세요" inputData={{data: password, setData: setPassword}} title="비밀번호"
												type="password"
												successText=""/>
			</div>
			<div className="flex justify-center pb-[20px]">
				<button
					className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold"
					disabled={true}
				>
					<p> 가입 완료하기</p>
				</button>
			</div>
		</div>
	);
}