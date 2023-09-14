import React, {useEffect, useState} from 'react';

type propsType = {
	title: string
	hide?: boolean
	failText: string
	successText: string
	auth?: boolean
	placeHolder?: string

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
		return true;
	};


	return (
		<div className="flex flex-col justify-center">
			<div className="pb-[40px]">
				<label className="text-left text-[14px] pl-[10px] pb-[4px]">{props.title}</label>
				<div
					className="border-b-[1px] border-b-[solid] border-b-[#000] pb-[5px] pl-[10px] w-full flex">
					<input
						type={props.hide ? 'password' : ''}
						value={inputValue}
						placeholder={props.placeHolder && props.placeHolder}
						className="w-5/6 placeholder:text-[12px] placeholder:text-[#AAA]"
						onChange={(value) => setInputValue(value.target.value)}
					/>

					{props.auth &&
              <div>
                  <button
                      className={isFail ? "w-[50px] h-[20px] rounded-[5px] bg-[#999999]" : "w-[50px] h-[20px] rounded-[5px] bg-[#3668EA]"}
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
			{open && props.auth &&
          <div className=" pb-[40px]">
              <label className="text-left text-[14px] bottom-[8px] pl-[10px] pb-[4px]">인증번호</label>
              <div
                  className="border-b-[1px] border-b-[solid] border-b-[#000] flex pl-[10px] pb-[5px]">
                  <input
                      maxLength={6}
                      value={input2Value}
                      className="w-full"
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
	);
}