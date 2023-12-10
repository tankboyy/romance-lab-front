import Image from "next/image";
import React from "react";

export default function NotAnalyze() {
	return (
		<div className="flex flex-col items-center">
			<Image src="/timeline/notFace.svg" alt="not" className="pb-[18px]" width={74} height={74}/>
			<p className="text-[13px] text-center leading-[20px]">
				이번 주에는 분석된 텍스트가 없어<br/>
				감정을 확인할 수 없어요.
			</p>
		</div>
	);
}