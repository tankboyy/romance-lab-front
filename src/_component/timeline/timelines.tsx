import Image from "next/image";
import Link from "next/link";
import {TimelineListType} from "@/recoil/atoms";

export default function Timelines({title, place, text, textClassify, selectCouple, selectType, createAt}: TimelineListType) {
	return (
		<div>
			<div className="flex border-b-[1px] border-solid border-[#E2E2E2] items-center py-[16px]">
				<div className="mx-[10px] min-w-[44px]">
					<Image src="/main/emotion/언짢음.png" alt="언짢음" width={44} height={44}/>
				</div>
				<div className="space-y-[8px] w-full">
					<em className="text-[12px]">{selectCouple} (연인)님이 {selectType}를 분석했어요.</em><br/>
					<div className="justify-between flex">
						<em className="text-[11px] text-[#AAA]">{createAt}</em>
						<Link href="/timeline/1234/template" className="text-[11px] underline">편지템플릿 보기</Link>
					</div>
				</div>
			</div>
		</div>
	);
}