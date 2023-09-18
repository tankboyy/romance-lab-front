import React, {useState} from 'react';
import InputComponent from "./InputComponent";
import PasswordComponent from "./passwordComponent";

type propsType = {};

export default function SignUpComponent(props: propsType) {
	const [auth, setAuth] = useState(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [authNumber, setAuthNumber] = useState<string>("");

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="space-y-[20px]">
				<InputComponent setAuth={setAuth} inputData={{data: email, setData: setEmail}} placeHolder="이메일을 입력해주세요"
												title="이메일"
												failText="유효하지 않은 이메일이에요" successText=""/>
				{auth && <InputComponent inputData={{data: authNumber, setData: setAuthNumber}} placeHolder="인증번호를 입력해주세요"
                                 title="인증번호" failText="유효하지 않는 인증번호에요" type="number"
                                 successText=""/>}
				<InputComponent placeHolder="비밀번호를 입력해주세요" inputData={{data: password, setData: setPassword}} title="비밀번호"
												failText="비밀번호가 맞지 않아요" type="password"
												successText=""/>
			</div>
			<div className="flex justify-center pb-[20px]">
				<button
					className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]"
					disabled={true}
				>
					<p> 가입 완료하기</p>
				</button>
			</div>
		</div>
	);
}