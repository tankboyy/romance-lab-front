import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

type propsType = {};


export default function MapComponent(props: propsType) {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const kakaoMapScript = document.createElement('script');
		kakaoMapScript.async = true;
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=93d62424841520ad98cbe8b363c63bb0&autoload=false`;
		document.head.appendChild(kakaoMapScript);

		const onLoadKaKaoAPI = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(33.5563, 126.79581),
					level: 2,
				};

				// @ts-ignore
				const map = new window.kakao.maps.Map(container, options);

				// 기본값
				const marker = new window.kakao.maps.Marker({
					position: new window.kakao.maps.LatLng(33.55635, 126.795841),
					image: new window.kakao.maps.MarkerImage('/timeline/marker.png', new kakao.maps.Size(40, 40)),
					clickable: true,
				});

				// 기본값 내 위치로
				if (window.navigator.geolocation) {
					navigator.geolocation.getCurrentPosition((position) => {
						const lat = position.coords.latitude;
						const lon = position.coords.longitude;
						const locPosition = new kakao.maps.LatLng(lat, lon);
						marker.setPosition(locPosition);
					});
				}

				marker.setMap(map);
				window.kakao.maps.event.addListener(marker, 'click', () => {
					setOpen((prev) => {
						!prev ? marker.setImage(new window.kakao.maps.MarkerImage('/timeline/marker.png', new kakao.maps.Size(60, 60))) :
							marker.setImage(new window.kakao.maps.MarkerImage('/timeline/marker.png', new kakao.maps.Size(40, 40)));
						map.setCenter(marker.getPosition());
						return !prev;
					});
				});
			});

		};

		kakaoMapScript.addEventListener('load', onLoadKaKaoAPI);

	}, []);
	return (
		<div>
			<div id="map" className="w-[calc(100%+40px)] h-[calc(100vh-40px)] ml-[-20px] mt-[-30px]"/>
			{!open ?
				<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-[50px] fixed z-10">
					<div className="flex justify-end pr-[20px] pb-[10px]">
						<a>
							<Link href="/timeline">
								<Image className="" src="/main/note.png" alt="지도" width={44} height={44}/>
							</Link>
						</a>
					</div>
				</div>

				:
				<div className="w-full max-w-[420px] mx-auto left-0 right-0 bottom-[50px] fixed z-10 animate-fadeIn">
					<div className="flex justify-end pr-[20px] pb-[10px]">
						<Image className="" src="/main/note.png" alt="지도" width={44} height={44}/>
					</div>

					<div className="bg-white p-[20px] rounded-t-[10px] shadow-map">
						<div className="flex flex-col pb-[14px] pt-[4px]">
							<div className="pb-[10px] flex items-center">
								<em className="text-[18px] font-bold pr-[10px]">보라매떡볶이</em>
								<em className="text-[14px]">분식</em>
							</div>
							<em className="text-[11px] underline">장소 정보 보기</em>
						</div>
						<div className="mx-[10px] flex items-center my-[13px]">
							<div className=" min-w-[44px] mr-[10px]">
								<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
							</div>

							<div className="flex-col flex w-full">
								<em className="text-[12px] pb-[8px]">유저2 (연인)님이 일기를 분석했어요.</em>
								<div className="justify-between flex">
									<em className="text-[11px] text-[#AAA]">2023.09.06</em>
									<Link href="/timeline/1234/template" className="text-[11px] underline">편지템플릿 보기</Link>
								</div>
							</div>
						</div>
					</div>
				</div>}
		</div>
	);
}