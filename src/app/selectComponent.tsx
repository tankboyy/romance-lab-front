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
};


export default function SelectComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [inputValue, setInputValue] = useState<string>("");
	const [open, setOpen] = useState(false);
	const [selectData, setSelectData] = useState("");

	useEffect(() => {
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		setIsFail(() => !pattern.test(inputValue));
	}, [inputValue]);

	const onClickLi = (e: any) => {
		setSelectData(e.target.innerText);
		setOpen(false);
	};


	return (
		<div className="flex flex-col justify-center">
			<div className="pb-[40px]">
				<label className="text-left text-[14px] pl-[10px] pb-[4px]">{props.title}</label>
				<div className="pl-[10px] pt-[10px]">
					<p
						className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
				</div>
				<div>
					<div
						className="w-full h-[20px] items-center pb-2 border-black border-solid border-b-[1px] flex justify-between"
						onClick={() => setOpen(prev => !prev)}>
						<p
							className={selectData === "" ? "px-[10px] text-[#AAA] text-[12px]" : "px-[10px] text-[12px]"}>{selectData === "" ? props.placeHolder : selectData}</p>
						<div className="pr-2">
							<Image alt="화살표" src={arrowImage}/>
						</div>
					</div>
					{open &&
              <ul className="text-[11px] shadow-xl px-[10px] absolute left-[20px] right-[20px] bg-white">
								{props.list?.map(item => (
									<li onClick={(e) => onClickLi(e)}
											key={item}
											className="p-[10px] border-solid border-t-[1px] hover:bg-gray-300">{item}</li>
								))}
              </ul>
					}
				</div>
			</div>
		</div>
	);
}