import React, {useEffect, useState} from 'react';

type propsType = {
	ref?: React.MutableRefObject<any>
	title: string
	type?: string
	successText: string
	setAuth?: ((value: (((prevState: boolean) => boolean) | boolean)) => void)
	placeHolder?: string
	inputData: {
		data: any
		setData: any
	}
	min?: number
	max?: number
	checks?: { condition: RegExp | boolean, str: string }[]
};


export default function InputComponent(props: propsType) {
	useEffect(() => {
		if (props.checks) {
			const errMes: string[] = [];
			props.checks.forEach(({condition, str}) => {
				if (typeof condition === 'object') {
					const pattern = condition as RegExp;
					if (!pattern.test(props.inputData.data)) errMes.push(str);
				} else {
					if (condition) errMes.push(str);
				}
			});
			setErrMes(errMes);
		}
	}, [props.inputData.data]);
	const [errMes, setErrMes] = useState<string[]>([]);
	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col w-full">
				<label className="text-left text-[14px] leading-[24px] pl-[6px] pb-[4px]">{props.title}</label>
				<div className="flex relative pb-[22px]">
					<input
						maxLength={props.max}
						minLength={props.min}
						placeholder={props.placeHolder && props.placeHolder}
						type={props.type && props.type}
						value={props.inputData?.data}
						className="w-full p-[10px] leading-3 h-[30px] font-nanum focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
						onChange={(value) => {
							if (props.type === 'number' && value.target.value.length > 6) {
								props.inputData?.setData(value.target.value.slice(0, 6));
							} else props.inputData?.setData(value.target.value);
						}}
					/>
					<div className="pl-[10px] pt-[10px] absolute bottom-0">
						{
							errMes.length !== 0 ?
								<p className="text-[#E84E4E] text-[12px]">{errMes[0]}</p> :
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