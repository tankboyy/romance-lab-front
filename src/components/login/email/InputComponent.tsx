import React, {useEffect, useState} from 'react';

type propsType = {
	ref?: React.MutableRefObject<any>
	title: string
	type?: string
	failText: string
	successText: string
	setAuth?: ((value: (((prevState: boolean) => boolean) | boolean)) => void)
	placeHolder?: string
	inputData: {
		data: any
		setData: any
	}
	checks?: { reg: RegExp, str: string }[]
};


export default function InputComponent(props: propsType) {

	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] leading-[24px] pl-[6px] pb-[4px]">{props.title}</label>
				<div className="flex relative pb-[22px]">
					<input
						placeholder={props.placeHolder && props.placeHolder}
						type={props.type ? props.type : 'text'}
						value={props.inputData?.data}
						className="w-full p-[10px] leading-3 h-[30px] font-nanum focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
						onChange={(value) => props.inputData?.setData(value.target.value)}
					/>
					{/*{props.setAuth && isFail ?*/}
					{/*	<div className="absolute right-0 pt-[1px]">*/}
					{/*		<button*/}
					{/*			className={isFail ? "w-[50px] h-[20px] rounded-[5px] bg-[#999999]" : "w-[50px] h-[20px] rounded-[5px] bg-[#3668EA]"}*/}
					{/*			disabled={isFail}*/}
					{/*			onClick={() => props.setAuth?.(true)}*/}
					{/*		>*/}
					{/*			<p className="text-[#FFF] font-bold text-[11px]">인증요청</p>*/}
					{/*		</button>*/}
					{/*	</div> :*/}
					{/*	null*/}
					{/*}*/}
					<div className="pl-[10px] pt-[10px] absolute bottom-0">
						{
							props.failText ?
								<p className="text-[#E84E4E] text-[12px]">{props.failText}</p> :
								props.successText ?
									<p className="text-[#3668EA] text-[12px]">{props.successText}</p> :
									null
						}
					</div>
				</div>
			</div>
		</div>
	);
}