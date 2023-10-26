'use client';

import React, {useState} from 'react';
import Image from "next/image";
import TextInputComponent from '../../../../components/timeline/textInputComponent';
import Link from "next/link";

type propsType = {};

export default function Page(props: propsType) {
	const [text, setText] = useState("");
	return (
		<div className="max-w-[420px] max-h-max min-h-[100vh] bg-white flex flex-col w-[100vw] p-[20px] pb-[50px]">
			<div className="pt-[10px] pb-[60px]">
				<p className="text-[24px] leading-[32px] font-bold pb-[10px]">
					텍스트 분석결과
				</p>
				<p className="text-[14px] leading-[24px]">
					연인과 공유한 텍스트들을
					<br/>
					AI를 이용해 분석한 결과입니다.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center pb-[45px]">
				<p className="text-[14px] leading-[24px] items-center pb-[6px]">
					이 텍스트는 <em className="text-[16px] font-bold">연인1</em>이 분석 요청한 편지에요. <br/>
				</p>
				<p className="leading-[11px] text-[11px] ">
					분석 날짜 : 2023.09.07
				</p>
			</div>
			<div className="pb-[28px]">
				<TextInputComponent readonly={true} failText="" inputData={{data: text, setData: setText}} successText=""
														title="분석된 텍스트"/>
			</div>
			<div>
				<p className="pb-[10px] text-[14px] border-solid border-black border-b-[1px] mb-[20px]">분석 결과</p>
				<p className="pb-[5px]">감정</p>
				<div className="">
					<div className="text-[13px] border-b-[1px] border-solid border-b-[#E2E2E2] mb-[40px]">
						<div className="flex items-center border-b-[1px] border-solid border-b-[#E2E2E2]">
							<div className="px-[10px]">
								<Image src={'/main/emotion/언짢음.png'} alt="언짢음" width="44" height="44"/>
							</div>
							<div className="py-[11px]">
								<em className="leading-[24px]">
									이 편지에서 <em className="font-bold">전체적</em>으로 느껴지는 감정은 <br/>
									<em className="font-bold text-[16px]">언짢음</em>이군요!
								</em>
							</div>
						</div>
						<div className="flex items-center">
							<div className="px-[10px]">
								<Image src={'/main/emotion/미안함.png'} alt="미안함" width="44" height="44"/>
							</div>
							<div className="py-[11px]">
								<em className="leading-[24px]">
									이 편지의 <em className="font-bold">초반부</em>에서 느껴지는 감정은 <br/>
									<em className="font-bold text-[16px]">미안함</em>이에요.
								</em>
							</div>
						</div>
						<div className="flex items-center">
							<div className="px-[10px]">
								<Image src={'/main/emotion/짜증.png'} alt="짜증" width="44" height="44"/>
							</div>
							<div className="py-[11px]">
								<em className="leading-[24px]">
									이 편지의 <em className="font-bold">중반부</em>에서 느껴지는 감정은 <br/>
									<em className="font-bold text-[16px]">짜증</em>이에요.
								</em>
							</div>
						</div>
						<div className="flex items-center">
							<div className="px-[10px]">
								<Image src={'/main/emotion/언짢음.png'} alt="언짢음" width="44" height="44"/>
							</div>
							<div className="py-[11px]">
								<em className="leading-[24px]">
									이 편지의 <em className="font-bold">후반부</em>에서 느껴지는 감정은 <br/>
									<em className="font-bold text-[16px]">언짢음</em>이에요.
								</em>
							</div>
						</div>
					</div>
					<div className="border-b-[1px] border-solid border-b-[#E2E2E2] mb-[40px]">
						<p className="text-[14px]">관심사(주제)</p>
						<p className="text-[13px] items-center leading-[30px] py-[15px] px-[10px]">
							이 편지의 <em className="font-bold">관심사(주제)</em>는 <em className="font-bold text-[16px]">결혼식, 신부에게 줄 선물,
							축의금</em>
							이군요!
						</p>
					</div>
					<div className="border-b-[1px] border-solid border-b-[#E2E2E2] mb-[40px]">
						<p className="text-[14px]">갈등</p>
						<div className="text-[13px] items-center leading-[20px] py-[15px] px-[10px]">
							<p className="pb-[10px]">
								이 편지에서 보이는 갈등의 원인은
								<em className="text-[16px] font-bold"> {"소통부족"}</em>
								이에요. 이 갈등을 해결하기 위해서는 아래와 같은 노력이 필요해 보여요.
							</p>
							<p>
								연인관의 적극적인 소통이 필요해보입니다. 이를 위해서는 마음의 벽을 열고
							</p>
						</div>
					</div>

					<div className="border-b-[1px] border-solid border-b-[#E2E2E2] mb-[40px]">
						<p className="text-[14px]">관계</p>
						<div className="text-[13px] items-center leading-[20px] py-[15px] px-[10px]">
							<p className="pb-[10px]">
								이 편지에서 보이는 연인 사이의 관계성은 아래와 같아요.
							</p>
							<p>
								편지는 강한 애정과 로맨스로 가득 차 있습니다. 작성자는 상대방에게 강한 사랑과 애정을 표현하며,
								대단해대단해대단해대단해
							</p>
						</div>
					</div>

					<div className="border-b-[1px] border-solid border-b-[#E2E2E2] mb-[40px]">
						<p className="text-[14px]">장소</p>
						<div className="text-[13px] items-center leading-[20px] py-[15px] px-[10px]">
							<p className="pb-[20px] leading-[20px]">
								이 편지와 연결된 장소는
								<em className="font-bold">
									{"카카오 판교오피스"}
								</em>에요.
							</p>
							<p className="flex flex-col text-[12px] text-center">
								<em className="leading-[20px]">
									이 장소를 타임라인에서 지도와 함께 볼 수 있어요.
								</em>
								<Link href="/timeline/map" className="underline text-[11px] pt-[6px] pb-[14px]">
									지도로 보기
								</Link>
								<em className="text-[#AAA] leading-[20px] text-[11px]">이 장소는 텍스트를 분석요청할 때 함께 제출된 장소에요.</em>
							</p>
						</div>
					</div>
					<div className="border-b-[1px] border-solid border-b-[#E2E2E2] mb-[30px]">
						<p className="text-[14px]">추천</p>
						<div className="text-[13px] px-[10px] space-y-[10px] py-[15px] leading-[20px]">
							<p>
								연인과 함께 공유할 만한 관심사로
								<em className="text-[16px] font-bold"> {"가을 패션, 가을 요리"}</em>는 어떨까요?
							</p>
							<p>
								연인과 함께 즐길만한 데이트 장소로
								<em className="text-[16px] font-bold"> {"바다, 공원"}</em>이 좋을 것 같아요!
							</p>
							<p>
								연인과 함께할 취미로
								<em className="text-[16px] font-bold"> {"골프, 산책"}</em>은 어때요?
							</p>
						</div>
					</div>
					<div className="text-[13px] text-center pb-[40px]">
						<p className="pb-[10px] leading-[20px]">
							이 분석결과를 바탕으로 연인에게 편지를 써볼까요?<br/>
							저희가 도와드릴 수 있어요!
						</p>
						<Link href="/timeline/1234/template/create" className="underline text-[11px]">
							편지 쓰러 가기
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}