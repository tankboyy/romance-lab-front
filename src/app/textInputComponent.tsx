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


export default function InputComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);

	useEffect(() => {
		// const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		// setIsFail(() => !pattern.test(props.inputData?.data));
	}, [props.inputData?.data]);

	return (
		<div className="flex flex-col justify-center pb-[62px] relative">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] pl-[4px] pb-[10px]">{props.title}</label>
				<div className="flex">
					<textarea
						placeholder={props.placeHolder && props.placeHolder}
						value={props.inputData?.data}
						className="scroll-pl-14 w-full p-[10px] leading-[22px] h-[400px] focus:outline-none border-[1px] border-[#AAA] rounded-[5px] border-solid text-[12px]"
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