'use client';

import React from 'react';
import MapComponent from "../../../../_component/timeline/map/MapComponent";
import {useSearchParams} from "next/navigation";

type propsType = {};

export default function Page(props: propsType) {
	const searchParams = useSearchParams();
	console.log(searchParams.get("x"), searchParams.get("y"));
	return (
		<main className="p-[20px] pb-[50px]">
			<MapComponent/>
		</main>
	);
}