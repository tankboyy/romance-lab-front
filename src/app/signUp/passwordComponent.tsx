import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
};

export default function PasswordComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [inputValue, setInputValue] = useState<string>("");

	useEffect(() => {
		const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$/;
		setIsFail(() => !pattern.test(inputValue));
	}, [inputValue]);

	return (
		<div className="m-0 p-0">
			<div className="w-[300px] ml-[50px]">
				{/*<p className="text-[14px] text-left ">이메일</p>*/}
				<label className="text-left text-[14px] bottom-[8px] pl-[10px] pb-[4px]">{props.title}</label>
				<div
					className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] relative z-[10] w-[300px] flex">
					<input
						type={props.hide ? 'password' : ''}
						value={inputValue}
						onChange={(value) => setInputValue(value.target.value)}
					/>

					{/*	<div>*/}
					{/*		<button*/}
					{/*			className={isFail ? "w-[50px] h-[20px] rounded-[5px] bg-[#999999] absolute inline-block ml-[50px] mt-[4px]" : "w-[50px] h-[20px] rounded-[5px] bg-[#3668EA] absolute inline-block ml-[50px] mt-[4px]"}*/}
					{/*			disabled={isFail}*/}
					{/*			onClick={() => setOpen(true)}*/}
					{/*		>*/}
					{/*			<p className="text-[#FFF] text-[11px]">인증요청</p>*/}
					{/*		</button>*/}
					{/*	</div>*/}
				</div>
				<div className="pl-[10px] pt-[10px]">
					<p
						className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
				</div>
			</div>
		</div>
	);
}