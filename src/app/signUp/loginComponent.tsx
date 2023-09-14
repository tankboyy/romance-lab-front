import React from 'react';
import InputComponent from "./InputComponent";
import PasswordComponent from "./passwordComponent";

type propsType = {};

export default function LoginComponent(props: propsType) {
	return (
		<div className="flex flex-col h-full justify-between">
			<div>
				<InputComponent title="이메일" failText="유효하지 않은 이메일이에요" successText="" login={true}/>
				<PasswordComponent title="비밀번호" failText="8글자 이상입력해주세요!" successText="사용 가능한 비밀번호입니다!"/>
			</div>
			<div className="flex justify-center p-[20px]">
				<button
					className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]"
					disabled={true}
				>
					<p> 로그인하기</p>
				</button>
			</div>
		</div>
	);
}