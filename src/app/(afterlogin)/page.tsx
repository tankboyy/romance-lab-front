'use client';

import React, {useState} from "react";
import MainComponent from "../../_component/mainComponent";
import Spinner from "@/_component/free/spinner";

export default function Home() {


	return (
		<div
			className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] justify-center pb-[80px]">
			<MainComponent/>
		</div>
	);
}
