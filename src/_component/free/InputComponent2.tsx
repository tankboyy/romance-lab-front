import React, {useEffect, useState} from 'react';

type propsType = {
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


export default function InputComponent2(props: propsType) {
	const [isFail, setIsFail] = useState(true);

	useEffect(() => {
		// const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		// setIsFail(() => !pattern.test(props.inputData?.data));
	}, [props.inputData?.data]);

	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] pl-[4px] pb-[10px]">{props.title}</label>
				<div className="flex relative pb-[22px]">
					<input
						placeholder={props.placeHolder && props.placeHolder}
						type={props.type ? props.type : 'text'}
						value={props.inputData?.data}
						className="w-full p-[10px] leading-3 h-[30px] focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
						onChange={(value) => props.inputData?.setData(value.target.value)}
					/>

					{props.setAuth ?
						<div className="absolute right-0 pt-[5px]">
							<button
								className={isFail ? "w-[50px] h-[20px] rounded-[5px] bg-[#999999]" : "w-[50px] h-[20px] rounded-[5px] bg-[#3668EA]"}
								disabled={isFail}
								onClick={() => props.setAuth?.(true)}
							>
								<p className="text-[#FFF] font-bold text-[11px]">인증요청</p>
							</button>
						</div> :
						null
					}

					<div className="pl-[10px] pt-[10px] absolute bottom-0">
						<p
							className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
					</div>
				</div>
			</div>
		</div>
	);
}