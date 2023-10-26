import React from 'react';
import Image from "next/image";
import MainComponent from "../../../../components/mypage/modifyCouple/mainComponent";

type propsType = {};

export default function Page(props: propsType) {
	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-screen h-[100vh] p-[20px] pb-[70px]">
			<MainComponent/>
		</div>
	);
}
