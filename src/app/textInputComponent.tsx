import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
	auth?: boolean
	placeHolder?: string
	data?: string
	readonly?: boolean
};


export default function TextInputComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [inputValue, setInputValue] = useState<string>(props.data ? props.data : "");

	useEffect(() => {
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		setIsFail(() => !pattern.test(inputValue));
	}, [inputValue]);

	const checking = (value: string) => {
		if (value.length !== 6) return;
		console.log("6");
		return true;
	};


	return (
		<div className="flex flex-col justify-center">
			<div className="pb-[30px]">
				<label className="text-left text-[14px] pl-[10px] pb-[4px]">{props.title}</label>
				<div
					className="border-[1px] h-[400px] border-[solid] border-[#AAA] pb-[5px] w-full flex">
					<textarea
						readOnly={props.readonly}
						value={inputValue}
						placeholder={props.placeHolder && props.placeHolder}
						className="w-full text-[12px] resize-none p-[5px] placeholder:text-[#AAA]"
						onChange={(value) => setInputValue(value.target.value)}
					/>

				</div>
				<div className="pl-[10px] pt-[10px]">
					<p
						className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
				</div>
			</div>
		</div>
	);
}