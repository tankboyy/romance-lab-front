'use client';

import React, {useState} from "react";
import MainComponent from "../components/mainComponent";

export default function Home() {

	return (
		<div
			className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] justify-between pb-[80px]">
			<MainComponent/>
		</div>
	);
}
