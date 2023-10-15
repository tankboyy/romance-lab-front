import React, {useEffect, useState} from 'react';
import InputComponent from "../../login/email/InputComponent";

type propsType = {};

export default function LoginComponent(props: propsType) {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [clear, setClear] = useState(false);

	const handleLogin = () => {
		console.log('hi');
	};

	useEffect(() => {
		if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/.test(password)
		) {
			setClear(true);
		} else setClear(false);
	}, [email, password]);

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="space-y-[20px]">
				<InputComponent inputData={{data: email, setData: setEmail}}
												placeHolder="이메일을 입력해주세요"
												title="이메일"
												successText=""
												checks={[{
													condition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
													str: "유효하지 않은 이메일이에요"
												}]}
				/>
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
					onClick={handleLogin}
				>
					<p> 가입 완료하기</p>
				</button>
			</div>
		</div>
	);
}