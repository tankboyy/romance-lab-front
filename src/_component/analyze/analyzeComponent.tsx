'use client';

import React, {useEffect, useRef, useState} from 'react';
import InputComponent from "../free/InputComponent";
import SelectComponent from "./selectComponent";
import TextInputComponent from "../free/textInputComponent";
import {useRouter} from "next/navigation";
import Link from "next/link";
import MapComponent from "@/_component/analyze/mapComponent";
import PlacesSearchResultItem = kakao.maps.services.PlacesSearchResultItem;
import Spinner from "@/_component/free/spinner";

export default function AnalyzeComponent() {
	const [title, setTitle] = useState("");
	const [place, setPlace] = useState<PlacesSearchResultItem>();
	const [text, setText] = useState("");
	const [textClassify, setTextClassify] = useState("");
	const [selectCouple, setSelectCouple] = useState("");
	const [selectType, setSelectType] = useState("");
	const [clear, setClear] = useState(false);
	const [open, setOpen] = useState(false);
	const [spinOpen, setSpinOpen] = useState(false);
	const router = useRouter();

	const onChangePlace = (placeData: PlacesSearchResultItem | "") => {
		if (placeData === "") {
			setOpen(false);
			return;
		}
		setPlace(placeData);
		setOpen(false);
	};

	useEffect(() => {
		if (title && selectType && text) {
			if (text.length < 500 || text.length > 3000) return;
			if (selectType === "직접입력" ? textClassify.length !== 0 : false) return;
			console.log('test');
			setClear(true);
		} else setClear(false);

	}, [selectCouple, title, selectType, textClassify, text]);

	function handleSubmit() {
		setSpinOpen(prev => !prev);
		// router.push("/timeline/1230049");
	}

	return (
		<div className="pt-[10px]">
			{open && <MapComponent onChangePlace={onChangePlace}/>}
			{spinOpen && <Spinner open={spinOpen} text="AI로 텍스트를 분석하고 있어요."/>}

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
			<div className="space-y-[22px]">
				<div className="pb-[12px]">
					<SelectComponent inputData={{data: selectCouple, setData: setSelectCouple}} title="텍스트를 쓴 사람"
													 list={['연인1', '연인2']} successText="" failText=""/>
				</div>
				<InputComponent inputData={{data: title, setData: setTitle}} title="제목" successText=""
												max={20}
												checks={[{
													condition: title.length === 0,
													str: "제목이 입력되지 않았어요"
												}]}
												placeHolder="타임라인에 기록될 제목을 입력해주세요"/>
				<div className="pb-[22px]">
					<SelectComponent title="텍스트 분류" list={['편지', '일기', '채팅', '직접입력']}
													 inputData={{data: selectType, setData: setSelectType}}
													 placeHolder="텍스트의 분류를 선택해주세요"
													 successText=""
													 failText={selectType === "" ? "텍스트 분류가 선택되지 않았어요" : ""}/>
				</div>
				{selectType === "직접입력" &&
          <InputComponent inputData={{data: textClassify, setData: setTextClassify}} title="텍스트 분류 입력하기"
                          placeHolder="텍스트 분류를 직접 입력해주세요"
                          successText=""
                          checks={[{
														condition: textClassify.length === 0,
														str: '텍스트 분류가 직접 입력되지 않았어요'
													}]}
                          max={6}
          />
				}
				<div className="flex flex-col justify-center">
					<div className="flex flex-col w-full">
						<label className="text-left text-[14px] leading-[24px] pl-[6px] pb-[4px]">장소</label>
						<div className="flex pb-[22px]">
							<div
								className="w-full p-[10px] leading-3 cursor-pointer h-[30px] font-nanum focus:outline-none border-b-[1px] border-black border-solid text-[12px]"
								onClick={() => setOpen(true)}
							>
								{place ? <p>{place.place_name}</p> : <p className="text-[#AAA]">연인과 함께했던 장소를 입력해주세요 (선택)</p>}

							</div>
						</div>
					</div>
				</div>
				<TextInputComponent inputData={{data: text, setData: setText}} title="텍스트" successText=""
														failText="텍스트가 입력되지 않았어요"
														placeHolder="분석할 텍스트를 입력해주세요"/>
			</div>
			<button
				className={`${clear ? "w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px] font-bold" : "w-full h-[40px] rounded-[5px] text-[#FFF] text-[12px] font-bold bg-[#D9D9D9]"}`}
				disabled={!clear}
				onClick={handleSubmit}
			>
				<p> 제출하기</p>
			</button>
		</div>
	);
}