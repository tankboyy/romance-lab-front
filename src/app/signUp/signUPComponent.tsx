import React, {useState} from 'react';
import InputComponent from "./InputComponent";
import PasswordComponent from "./passwordComponent";

type propsType = {};

export default function SignUpComponent(props: propsType) {
	const [checkList, setCheckList] = useState(false);

	return (
		<div>
			<div className="space-y-[20px]">
				<InputComponent title="이메일" failText="유효하지 않은 이메일이에요" successText=""/>
				<PasswordComponent title="비밀번호" failText="8글자 이상입력해주세요!" successText="사용 가능한 비밀번호입니다!"/>
			</div>
			<button
				className="w-[300px] h-[40px] rounded-[5px] bg-[#3668EA] ml-[50px] absolute bottom-3 text-[#FFF] text-[12px]"
				disabled={true}
			>
				<p> 가입 완료하기</p>
			</button>
		</div>
	);
}