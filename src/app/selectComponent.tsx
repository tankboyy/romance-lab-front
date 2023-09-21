import React, {useEffect, useState} from 'react';
import arrowImage from '../../public/main/arrow.png';
import Image from 'next/image';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
	auth?: boolean
	list: string[]
	placeHolder?: string
	inputData: {
		data: any
		setData: any
	}
};


export default function SelectComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		setIsFail(() => !pattern.test(props.inputData.data));
	}, [props.inputData.data]);

	const onClickLi = (e: any) => {
		props.inputData.setData(e.target.innerText);
		setOpen(false);
	};


	return (
		<div className="flex flex-col justify-center relative">
			<label className="text-[14px] pl-[6px] pb-[10px]">{props.title}</label>
			<div className="pl-[10px]">
				<p
					className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
			</div>
			<div>
				<div
					className="w-full items-center h-[30px] border-black border-solid border-b-[1px] flex justify-between"
					onClick={() => setOpen(prev => !prev)}>
					<em
						className={props.inputData.data === "" ? " p-[10px] text-[#AAA] text-[12px]" : " p-[10px] text-[12px]"}>{props.inputData.data === "" ? props.placeHolder : props.inputData.data}</em>
					<div className="pr-[10px]">
						<Image alt="화살표" src={arrowImage}/>
					</div>
				</div>
				{open &&
            <ul className="text-[12px] px-[10px] absolute left-0 z-10 right-0 rounded-[0px_0px_5px_5px] shadow-[0px_2px_4px_4px_rgba(0,0,0,0.05)] bg-white">
							{props.list?.map((item, index) => (
								<li onClick={(e) => onClickLi(e)}
										key={item}
										className={index === 0 ? "hover:bg-gray-300 h-[40px] py-[15px] pl-[10px]" : "h-[40px] py-[15px] pl-[10px] border-[#E2E2E2] border-solid border-t-[1px] hover:bg-gray-300"}>{item}</li>
							))}
            </ul>
				}
			</div>
		</div>
	);
}