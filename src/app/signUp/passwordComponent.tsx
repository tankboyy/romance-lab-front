import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
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
		<div className="px-[20px] w-full">
			<label className="text-left text-[14px] bottom-[8px] pl-[10px] pb-[4px]">{props.title}</label>
			<div
				className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] flex">
				<input
					type="password"
					className="w-full"
					value={inputValue}
					onChange={(value) => setInputValue(value.target.value)}
				/>

			</div>
			<div className="pl-[10px] pt-[10px]">
				<p
					className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
			</div>
		</div>
	);
}