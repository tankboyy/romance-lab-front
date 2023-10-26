'use client';

import React from 'react';
import MapComponent from "../../../../_component/timeline/map/MapComponent";

type propsType = {};

export default function Page(props: propsType) {
	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] pb-[50px]">
			<MapComponent/>
		</div>
	);
}