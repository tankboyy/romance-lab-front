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

	return (
		<div className="flex flex-col justify-center pb-[62px] relative">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] pl-[4px] pb-[10px]">{props.title}</label>
				<div
					className="flex border-[1px] border-[#AAA] rounded-[5px] focus-within:border-[#000] z-15 border-solid pt-[12px] pl-[12px] pr-[8px]">
					<textarea
						id="customTextArea"
						placeholder={props.placeHolder && props.placeHolder}
						value={props.inputData?.data}
						className="w-full resize-none leading-[22px] h-[400px] focus:outline-none text-[12px]"
						onChange={(value) => props.inputData?.setData(value.target.value)}
					/>
					<div className="absolute bottom-0 pb-[40px] left-[6px]">
						<p
							className="text-[#E84E4E] text-[12px]">{props.inputData.data.length === 0 ? "텍스트가 입력되지 않았어요" : props.inputData.data.length < 500 ? "최소 500자 이상 입력해주세요" : props.inputData.data.length > 3000 ? "최대 3000자 까지만 입력할 수 있어요" : ""}</p>
					</div>
				</div>
			</div>
		</div>
	);
}