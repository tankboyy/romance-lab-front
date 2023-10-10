import React, {useRef, useState} from 'react';
import InputComponent from "../InputComponent";
import SelectComponent from "../selectComponent";
import TextInputComponent from "../textInputComponent";

type propsType = {};

export default function AnalyzeComponent(props: propsType) {
	const [title, setTitle] = useState("");
	const [place, setPlace] = useState("");
	const [text, setText] = useState("");
	const [textClassify, setTextClassify] = useState("");
	const [selectCouple, setSelectCouple] = useState("");
	const [selectType, setSelectType] = useState("");

	return (
		<div className="pt-[10px]">
			<div className="pb-[34px]">
				<p className="text-[24px] font-bold pb-[10px] leading-[32px]">
					<em>
						텍스트 분석하기
					</em>
				</p>
				<em className="text-[14px] leading-[24px]">
					연인과 공유한 텍스트들을 <br/>
					AI를 이용해 분석해보세요!
				</em>
			</div>
			<div className="space-y-[22px] relative">
				<div className="pb-[22px]">
					<SelectComponent inputData={{data: selectCouple, setData: setSelectCouple}} title="텍스트를 쓴 사람"
													 list={['연인1', '연인2']} successText="" failText=""/>
				</div>
				<InputComponent inputData={{data: title, setData: setTitle}} title="제목" successText="" failText=""
												placeHolder="타임라인에 기록될 제목을 입력해주세요"/>
				<div className="pb-[22px]">
					<SelectComponent title="텍스트를 쓴 사람" list={['편지', '일기', '채팅', '직접입력']}
													 inputData={{data: selectType, setData: setSelectType}}
													 placeHolder="텍스트의 분류를 선택해주세요"
													 successText=""
													 failText=""/>
				</div>
				{selectType === "직접입력" &&
            <InputComponent inputData={{data: textClassify, setData: setTextClassify}} title="텍스트 분류 입력하기"
                            placeHolder="텍스트 분류를 직접 입력해주세요"
                            successText="" failText=""/>}
				<InputComponent inputData={{data: place, setData: setPlace}} title="장소" placeHolder="연인과 함께했던 장소를 입력해주세요 (선택)"
												successText="" failText=""/>
				<TextInputComponent inputData={{data: text, setData: setText}} title="텍스트" successText=""
														failText="텍스트가 입력되지 않았어요"
														placeHolder="분석할 텍스트를 입력해주세요"/>
			</div>
			<button className="h-[40px] bg-[#3668EA] text-white text-[12px] w-full rounded-[5px]">
				<p>제출하기</p>
			</button>
		</div>
	);
}