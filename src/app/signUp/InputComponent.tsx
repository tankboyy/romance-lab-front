import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
	login?: boolean
};


export default function InputComponent(props: propsType) {
	const [isFail, setIsFail] = useState(true);
	const [inputValue, setInputValue] = useState<string>("");
	const [isFail2, setIsFail2] = useState(true);
	const [input2Value, setInput2Value] = useState<string>("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		setIsFail(() => !pattern.test(inputValue));
	}, [inputValue]);

	const checking = (value: string) => {
		setInput2Value(value);
		if (value.length !== 6) return;
		console.log("6");
	};


	return (
		<div
			className=""
		>
			<div className="m-0 p-0">
				<div className="w-[300px] ml-[50px]">
					{/*<p className="text-[14px] text-left ">이메일</p>*/}
					<label className="text-left text-[14px] bottom-[8px] pl-[10px] pb-[4px]">{props.title}</label>
					<div
						className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] relative z-[10] w-[300px] flex">
						<input
							type={props.hide ? 'password' : ''}
							value={inputValue}
							onChange={(value) => setInputValue(value.target.value)}
						/>

						{!props.login &&
                <div>
                    <button
                        className={isFail ? "w-[50px] h-[20px] rounded-[5px] bg-[#999999] absolute inline-block ml-[50px] mt-[4px]" : "w-[50px] h-[20px] rounded-[5px] bg-[#3668EA] absolute inline-block ml-[50px] mt-[4px]"}
                        disabled={isFail}
                        onClick={() => setOpen(true)}
                    >
                        <p className="text-[#FFF] text-[11px]">인증요청</p>
                    </button>
                </div>
						}
					</div>
					<div className="pl-[10px] pt-[10px]">
						<p
							className={isFail ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
					</div>
				</div>
				{open && !props.login &&
            <div className="w-[300px] ml-[50px]">
                <label className="text-left text-[14px] bottom-[8px] pl-[10px] pb-[4px]">인증번호</label>
                <div
                    className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] relative z-[10] w-[300px] flex">
                    <input
                        maxLength={6}
                        value={input2Value}
                        onChange={(value) => checking(value.target.value)}
                    />
                </div>
                <div className="pl-[10px] pt-[10px]">
                    <p
                        className={isFail2 ? "text-[#E84E4E] text-[12px]" : "text-[12px] text-[#3668EA]"}>{isFail ? props.failText : props.successText}</p>
                </div>
            </div>
				}
			</div>
		</div>
	);
}