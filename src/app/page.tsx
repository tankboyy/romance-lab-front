'use client';

import Image from 'next/image';
import React, {useState} from "react";
import {TnowTap} from "../../public/types/main/types";
import MainComponent from "./mainComponent";
import AnalyzeComponent from "./analyze/analyzeComponent";
import MypageComponent from "./mypageComponent";

export default function Home() {
	const [nowTap, setNowTap] = useState<TnowTap>("메인페이지");

	return (
		<div
			className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vh] p-[20px] justify-between pb-[80px]">
			<MypageComponent/>
		</div>
	);
}
