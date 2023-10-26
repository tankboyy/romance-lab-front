'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import arrow from "@/../public/main/arrow2.png";
import PlacesSearchResultItem = kakao.maps.services.PlacesSearchResultItem;


export default function MapComponent({onChangePlace}: { onChangePlace: (placeData: PlacesSearchResultItem) => void; }) {
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
		<div className="flex flex-col absolute justify-center ml-[-20px]">
			<div
				className="relative bg-[#ffffff] min-h-[100vh] h-[200vh] z-30 max-w-[400px] px-[20px] w-[100vh] top-0 right-0">
				<div>
					<Image alt="화살표" src={arrow}/>
				</div>
				<div
					className="px-[20px] bg-gray-200 focus-within:bg-gray-300 w-full h-[40px] rounded-full flex items-center justify-center my-[20px]">
					<input onChange={(e) => setInfo(e.target.value)} className="w-full bg-transparent focus:outline-none"
								 type="text"/>
				</div>
				<div>
					<div className="text-[12px] text-[#aaa] font-bold pb-[10px] border-solid border-b-[1px] border-gray-300">
						장소결과
					</div>
					{searchList?.map((item) => (
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