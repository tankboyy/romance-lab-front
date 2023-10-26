'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import arrow from "@/../public/main/arrow2.png";


export default function MapComponent() {
	const [info, setInfo] = useState();
	useEffect(() => {
		const kakaoMapScript = document.createElement('script');
		kakaoMapScript.async = true;
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=93d62424841520ad98cbe8b363c63bb0&autoload=false&libraries=services`;
		document.head.appendChild(kakaoMapScript);

		const onLoadKaKaoAPI = () => {
			window.kakao.maps.load(() => {
				const ps = new window.kakao.maps.services.Places();

				ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
					console.log(data);
					if (status === kakao.maps.services.Status.OK) {
						// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
						// LatLngBounds 객체에 좌표를 추가합니다
						const bounds = new kakao.maps.LatLngBounds();
						let markers = [];

						for (var i = 0; i < data.length; i++) {
							// @ts-ignores
							markers.push({
								position: {
									lat: data[i].y,
									lng: data[i].x,
								},
								content: data[i].place_name,
							});
							// @ts-ignore
							bounds.extend(kakao.maps.LatLng(data[i].y, data[i].x));
						}
						console.log(markers);
						setMarkers(markers);

						// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
						map.setBounds(bounds);
					}
				});

			});

		};

		kakaoMapScript.addEventListener('load', onLoadKaKaoAPI);
	}, []);


	return (
		<div className="flex flex-col">
			<div>
				<Image alt="화살표" src={arrow}/>
			</div>
			<input className="flex bg-"/>
		</div>

	);
}