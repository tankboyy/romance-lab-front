import React from 'react';
import InputComponent from "./InputComponent";
import SelectComponent from "./selectComponent";
import TextInputComponent from "./textInputComponent";
import CompleteComponent from "./completeComponent";

type propsType = {};

export default function AnalyzeComponent(props: propsType) {
	return (
		<div>
			{/*<div className="py-[10px]">*/}
			{/*	<p className="text-[24px] font-medium pb-[5px]">*/}
			{/*		텍스트 분석하기*/}
			{/*	</p>*/}
			{/*	<p className="font-normal text-[14px]">*/}
			{/*		연인과 공유한 텍스트들을*/}
			{/*		<br/>*/}
			{/*		AI를 이용해 분석해보세요!*/}
			{/*	</p>*/}
			{/*</div>*/}

			{/*<SelectComponent title="텍스트를 쓴 사람" list={['연인1', '연인2']} successText="" failText=""/>*/}
			{/*<InputComponent title="제목" successText="" failText="" placeHolder="타임라인에 기록될 제목을 입력해주세요"/>*/}
			{/*<SelectComponent title="텍스트를 쓴 사람" list={['편지', '일기', '채팅', '직접입력']} placeHolder="텍스트의 분류를 선택해주세요" successText=""*/}
			{/*								 failText=""/>*/}
			{/*<InputComponent title="텍스트 분류 입력하기" placeHolder="텍스트 분류를 직접 입력해주세요" successText="" failText=""/>*/}
			{/*<InputComponent title="장소" placeHolder="연인과 함께했던 장소를 입력해주세요 (선택)" successText="" failText=""/>*/}
			{/*<TextInputComponent title="텍스트" successText="" failText="" placeHolder="분석할 텍스트를 입력해주세요"/>*/}
			{/*<button className="h-[40px] bg-[#3668EA] text-white text-[12px] w-full rounded-[5px]">*/}
			{/*	<p>제출하기</p>*/}
			{/*</button>*/}
			<CompleteComponent/>
		</div>
	);
}