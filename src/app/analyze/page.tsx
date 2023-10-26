'use client';

import React from 'react';
import AnalyzeComponent from "../../components/analyze/analyzeComponent";

type propsType = {
	params: {
		slug: string
	}
};

export default function Page(props: propsType) {
	return (
		<div
			className="max-w-[420px] min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] justify-between pb-[80px]">
			<AnalyzeComponent/>
		</div>
	);
}