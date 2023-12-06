'use client';

import React from 'react';
import MapComponent from "../../../../_component/timeline/map/MapComponent";

type propsType = {};

export default function Page(props: propsType) {
	return (
		<main className="p-[20px] pb-[50px]">
			<MapComponent/>
		</main>
	);
}