'use client';
import React, {useState} from 'react';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
	min?: number
	max?: number
	placeHolder?: string
};


export default function InputComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [inputValue, setInputValue] = useState<string>("");
	return (
		<div>
			<div className="mb-[40px]">
				<label className="text-left text-[14px] pl-[10px] pb-[4px]">{props.title}</label>
				<div
					className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] relative z-[10] flex">
					<input
						className="w-full"
						placeholder={props.placeHolder}
						type={props.hide ? 'password' : ''}
						value={inputValue}
						maxLength={props.max && props.max}
						minLength={props.min && props.min}
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