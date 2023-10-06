import React, {useState} from 'react';
import InputComponent from "../../../components/free/InputComponent";

type propsType = {};

export default function LoginComponent(props: propsType) {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<div className="flex flex-col h-full justify-between">
			<div className="space-y-[20px]">
				<InputComponent inputData={{data: email, setData: setEmail}} placeHolder="이메일을 입력해주세요" title="이메일"
												failText="유효하지 않은 이메일이에요" successText=""/>
				<InputComponent inputData={{data: password, setData: setPassword}} placeHolder="비밀번호를 입력해주세요" title="비밀번호"
												failText="비밀번호가 맞지 않아요" type="password"
												successText=""/>
			</div>
			<div className="flex justify-center pb-[20px]">
				<button
					className="w-full h-[40px] font-bold rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]"
					disabled={true}
				>
					<p>로그인하기</p>
				</button>
			</div>
		</div>
	);
}