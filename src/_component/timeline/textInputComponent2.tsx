import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
	failText: string
	successText: string
	placeHolder?: string
	inputData: {
		data: any
		setData: any
	}
	checks?: { reg: RegExp, str: string }[]
};


export default function TextInputComponent2(props: propsType) {
	const [isFail, setIsFail] = useState(true);

	return (
		<div className="flex flex-col justify-center pb-[22px]">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] pl-[6px] pb-[16px]">{props.title}</label>
				<div className="flex border-[1px] border-[#AAA] rounded-[5px] z-20 border-solid pt-[12px] pl-[12px] pr-[8px]">
					<textarea
						id="customTextArea"
						placeholder={props.placeHolder && props.placeHolder}
						value={props.inputData?.data}
						className="scroll-pl-14 w-full pr-10 resize-none leading-[22px] h-[120px] focus:outline-none text-[12px]"
						onChange={(value) => props.inputData?.setData(value.target.value)}
					/>
					<div className="pl-[6px] absolute bottom-0 pb-[40px]">
						<p
							className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
					</div>
				</div>
			</div>
		</div>
	);
}