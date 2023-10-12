'use client';

import React, {useState} from "react";
import MypageComponent from "../components/mypage/mypageComponent";

export default function Home() {

	return (
		<div
			className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vh] p-[20px] justify-between pb-[80px]">
			<MypageComponent/>
		</div>
	);
}
