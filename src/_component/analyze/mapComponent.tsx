'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import arrow from "@/../public/main/arrow2.png";
import PlacesSearchResultItem = kakao.maps.services.PlacesSearchResultItem;


export default function MapComponent({onChangePlace}: {
	onChangePlace: (placeData: PlacesSearchResultItem | "") => void;
}) {
	const [info, setInfo] = useState("");
	const [searchList, setSearchList] = useState<PlacesSearchResultItem[]>();
	useEffect(() => {
		const kakaoMapScript = document.createElement('script');
		kakaoMapScript.async = true;
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=93d62424841520ad98cbe8b363c63bb0&autoload=false&libraries=services`;
		document.head.appendChild(kakaoMapScript);

		const onLoadKaKaoAPI = () => {
			window.kakao.maps.load(() => {
				const ps = new window.kakao.maps.services.Places();
				const keyword = info;
				if (!info.replace(/^\s+|\s+$/g, '')) return;
				ps.keywordSearch(info, (data, status, _pagination) => {
					if (status === kakao.maps.services.Status.OK) {
						console.log(data);
						setSearchList(data);
					}
				});
			});
		};

		kakaoMapScript.addEventListener('load', onLoadKaKaoAPI);
	}, [info]);


	return (
		<div>
			<div className="bg-[rgba(255,255,255,0.8)] fixed left-0 top-0 w-full h-full z-20 cursor-pointer"
				// onClick={() => closePopup()}
			>
			</div>
			<div
				className="max-h-[580px] max-w-[380px] shadow-map-modal w-[calc(100%-40px)] h-[calc(100%-80px)] z-30 bg-white fixed p-[20px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
				<div className="cursor-pointer flex justify-end pb-[10px]" onClick={() => onChangePlace("")}>
					<Image alt="화살표" src="/backbtn.svg" width={14} height={14}/>
				</div>
				<div className="text-[20px] font-bold leading-[20px] pb-[22px] text-center">장소 검색하기</div>
				<div
					className="mb-[28px] bg-[#F4F4F4] w-full h-[34px] rounded-[4px] flex items-center justify-center p-[10px] text-[12px] leading-[14px]">
					<input onChange={(e) => setInfo(e.target.value)} className="w-full bg-transparent focus:outline-none"
								 placeholder="주소 또는 장소명을 입력해주세요"
								 type="text"/>
				</div>
				<div>
					<div className="text-[11px] pl-[4px] pb-[8px] border-solid border-b-[1px] border-[#E2E2E2]">
						장소 검색 결과
					</div>
					{!info ? <div className="pt-[50px] text-[14px] text-center">
						장소를 검색해주세요
					</div> : searchList?.map((item) => (
						<div
							className="pr-[10px] w-full h-[50px] flex justify-between items-center py-[20px] border-solid border-b-[1px] group border-b-gray-100 hover:bg-gray-200"
							onClick={() => onChangePlace(item)}
						>
							<p className="flex flex-col px-[10px] justify-center text-[14px] w-4/6">
								<em>
									{item.place_name}
								</em>
								<em className="text-[12px] text-[#aaa] font-bold mt-[5px]">
									{item.address_name}
								</em>
							</p>
							<button
								className="h-[30px] border-solid border-[1px] p-[10px] text-[12px] group-hover:border-[#aaa] flex items-center">선택
							</button>
						</div>
					))}
				</div>
			</div>
		</div>

	);
}