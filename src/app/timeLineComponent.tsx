import React, {useEffect} from 'react';
import Image from 'next/image';
import NotTimeLineComponent from "./notTimeLineComponent";


import {Map, MapMarker} from "react-kakao-maps-sdk";

type propsType = {};

export default function TimeLineComponent(props: propsType) {
	useEffect(() => {
		const kakaoMapScript = document.createElement('script');
		kakaoMapScript.async = true;
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=93d62424841520ad98cbe8b363c63bb0&autoload=false`;
		document.head.appendChild(kakaoMapScript);

		const onLoadKaKaoAPI = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(33.450701, 126.570667),
					level: 3,
				};

				const map = new window.kakao.maps.Map(container, options);
			});
		};

		kakaoMapScript.addEventListener('load', onLoadKaKaoAPI);

	}, []);
	return (
		<div className="pt-[10px]">
			{/*	<Map*/}
			{/*  center={{ lat: 33.5563, lng: 126.79581 }}*/}
			{/*  style={{ width: "100%", height: "360px" }}*/}
			{/*>*/}
			{/*  <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>*/}
			{/*    <div style={{color:"#000"}}>Hello World!</div>*/}
			{/*  </MapMarker>*/}
			{/*</Map>*/}
			<div id="map" className="w-[calc(100%+40px)] h-[calc(100vh-50px)] ml-[-20px] mt-[-30px]"/>
			{/*/!*<NotTimeLineComponent/>*!/*/}
			{/*<div className="space-y-[40px]">*/}
			{/*	<p className="flex flex-col leading-[32px] font-bold">*/}
			{/*		<em className="text-[24px] pb-[10px]">타임라인</em>*/}
			{/*		<em className="font-normal leading-[24px] text-[14px]">이번주에 분석한 텍스트들을 <br/>모아볼 수 있어요.</em>*/}
			{/*	</p>*/}
			{/*	<div className="flex flex-col items-center">*/}
			{/*		<Image src="/main/emotion/언짢음.png" alt="언짢음" className="pb-[18px]" width={74} height={74}/>*/}
			{/*		<p className="text-[13px] text-center leading-[20px]">*/}
			{/*			이번 주에 가장 많이 분석된 감정은 <br/>*/}
			{/*			<em className="font-bold text-[16px]">언짢음</em>*/}
			{/*			이에요!*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*	<div>*/}
			{/*		<p*/}
			{/*			className="pb-[6px] items-center text-[14px] border-solid border-black border-b-[1px] mb-[10px] flex justify-between">*/}
			{/*			<em className="leading-[24px]">분석결과</em>*/}
			{/*			<em className="text-[11px] underline">전체 기록 보기</em>*/}
			{/*		</p>*/}

			{/*		<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">*/}
			{/*			<div className="mx-[10px] min-w-[44px]">*/}
			{/*				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>*/}
			{/*			</div>*/}
			{/*			<p className="space-y-[8px] w-full">*/}
			{/*				<em className="text-[12px] leading-[18px]">유저1 (나)님이 편지를 분석했어요.</em><br/>*/}
			{/*				<em className="text-[11px] text-[#AAA]">2023.09.07</em>*/}
			{/*			</p>*/}
			{/*		</div>*/}


			{/*		<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">*/}
			{/*			<div className="mx-[10px] min-w-[44px]">*/}
			{/*				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>*/}
			{/*			</div>*/}
			{/*			<p className="space-y-[8px] w-full">*/}
			{/*				<em className="text-[12px]">유저2 (연인)님이 일기를 분석했어요.</em><br/>*/}
			{/*				<div className="justify-between flex">*/}
			{/*					<em className="text-[11px] text-[#AAA]">2023.09.07</em>*/}
			{/*					<em className="text-[11px] underline">편지템플릿 보기</em>*/}
			{/*				</div>*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">*/}
			{/*			<div className="mx-[10px] min-w-[44px]">*/}
			{/*				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>*/}
			{/*			</div>*/}
			{/*			<p className="space-y-[8px] w-full">*/}
			{/*				<em className="text-[12px]">유저2유저2유저2유저2 (연인)님이 가족모임기록을 분석했어요.</em><br/>*/}
			{/*				<div className="justify-between flex">*/}
			{/*					<em className="text-[11px] text-[#AAA]">2023.09.07</em>*/}
			{/*					<em className="text-[11px] underline">편지템플릿 보기</em>*/}
			{/*				</div>*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">*/}

			{/*			<div className="mx-[10px] min-w-[44px]">*/}
			{/*				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>*/}
			{/*			</div>*/}
			{/*			<p className="space-y-[8px] w-full">*/}
			{/*				<em className="text-[12px]">유저1 (나)님이 채팅를 분석했어요.</em><br/>*/}
			{/*				<em className="text-[11px] text-[#AAA]">2023.09.07</em>*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		/!*<div className="flex py-[10px]">*!/*/}
			{/*		<div className="flex items-center py-[16px]">*/}
			{/*			<div className="mx-[10px] min-w-[44px]">*/}
			{/*				<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>*/}
			{/*			</div>*/}
			{/*			<p className="space-y-[8px] w-full">*/}
			{/*				<em className="text-[12px]">유저1 (나)님이 편지를 분석했어요.</em><br/>*/}
			{/*				<em className="text-[11px] text-[#AAA]">2023.09.07</em>*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-14 fixed">*/}
			{/*		<div className="flex justify-end pr-[15px]">*/}
			{/*			<Image className="" src="/main/place.png" alt="지도" width={44} height={44}/>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	);
}