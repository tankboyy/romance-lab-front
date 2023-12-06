import React from 'react';
import Image from "next/image";
import MainComponent from "../../../../../_component/mypage/modifyCouple/mainComponent";

type propsType = {};

export default function Page(props: propsType) {
	return (
		<div className="px-[20px] h-full">
			<MainComponent/>
		</div>
	);
}
