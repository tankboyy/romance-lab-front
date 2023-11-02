'use client';

import React, {useEffect, useState} from 'react';
import TextInputComponent from '../../../../../../_component/timeline/textInputComponent';
import TextInputComponent2 from "../../../../../../_component/timeline/textInputComponent2";
import Spinner from "@/_component/free/spinner";
import InputComponent from "@/_component/free/InputComponent";

type propsType = {};

export default function Page(props: propsType) {
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [subject, setSubject] = useState("");
	const [couName, setCouName] = useState("");
	const [myName, setMyName] = useState("");
	const [req, setReq] = useState("");
	const [spinnerOpen, setSpinnerOpen] = useState(false);
	const [clear, setClear] = useState(false);


	useEffect(() => {
		if (title && subject && couName && myName) {
			setClear(true);
		}
	}, [title, subject, couName, myName]);

	function onCreate() {
		setSpinnerOpen(true);
	}


	return (
		<div className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] pb-[50px]">
			<div>
				<div className="pt-[10px] space-y-[10px] pb-[40px]">
					<p className="font-bold text-[24px]">편지템플릿 생성하기</p>
					<p className="leading-[24px] text-[14px]">
						분석된 텍스트를 바탕으로 <br/>
						AI가 편지 템플릿을 생성해줄 수 있어요.
					</p>
				</div>

				<div className="pb-[20px]">
					<TextInputComponent failText="" inputData={{data: text, setData: setText}} successText="" title="분석된 텍스트"
															readonly={true}/>
				</div>
				<div className="space-y-[22px] pb-[25px]">
					<InputComponent inputData={{data: title, setData: setTitle}} successText="" title="제목"
													checks={[{
														condition: title.length === 0,
														str: "제목이 입력되지 않았어요"
													}]}
													max={25}
													placeHolder="편지 제목을 입력해주세요"/>
					<InputComponent inputData={{data: subject, setData: setSubject}} successText="" title="주제"
													checks={[{
														condition: subject.length === 0,
														str: "주제가 입력되지 않았어요"
													}]}
													max={20}
													placeHolder="편지 주제를 입력해주세요"/>
					<InputComponent inputData={{data: couName, setData: setCouName}} successText="" title="연인의 호칭"
													checks={[{
														condition: couName.length === 0,
														str: "연인의 호칭이 입력되지 않았어요"
													}]}
													max={8}
													placeHolder="편지에서 연인을 부를 호칭을 입력해주세요"/>
					<InputComponent inputData={{data: myName, setData: setMyName}} successText="" title="내 호칭"
													checks={[{
														condition: myName.length === 0,
														str: "내 호칭이 입력되지 않았어요"
													}]}
													placeHolder="내 호칭을 입력해주세요"/>
					<TextInputComponent2 placeHolder="그 외에 AI에게 요청할 사항들을 입력해주세요 (선택)" failText=""
															 inputData={{data: req, setData: setReq}} successText="" title="요청사항"/>
				</div>
				<div className="pb-[20px]">
					<button
						className={`${clear ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
						disabled={!clear}
						onClick={onCreate}
					>
						<p> 제출하기</p>
					</button>
				</div>
			</div>
			<Spinner open={spinnerOpen}/>
		</div>
	);
}