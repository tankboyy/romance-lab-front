import React from 'react';
import TextInputComponent from "../free/textInputComponent";
import Image from 'next/image';

type propsType = {};

export default function CompleteComponent(props: propsType) {
	return (
		<div className="">
			<div className="py-[10px]">
				<p className="text-[24px] font-medium pb-[5px]">
					텍스트 분석결과
				</p>
				<p className="font-normal text-[14px]">
					연인과 공유한 텍스트들을
					<br/>
					AI를 이용해 분석한 결과입니다.
				</p>
			</div>
			<div className="py-[35px]">
				<p className="text-[14px] text-center">
					<a>
						이 텍스트는 <a className="text-[16px] font-medium">연인1</a>이 분석 요청한 편지에요. <br/>
						<a className="text-[11px]">분석 날짜 : 2023.09.07</a>
					</a>
				</p>
			</div>
			{/*<TextInputComponent*/}
			{/*	// readonly={true}*/}
			{/*	data="안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕"*/}
			{/*	title="분석된 텍스트" successText="" failText="" placeHolder="분석할 텍스트를 입력해주세요"/>*/}
			<div>
				<p className="pb-[5px] text-[14px] border-solid border-black border-b-[1px] mb-[15px]">분석 결과</p>
				<p className="pb-[5px]">감정</p>
				<div className="space-y-[20px]">

					<div className="text-[13px] space-y-[13px]">
						<div className="flex border-b-[1px] pb-[10px]">
							<div className="px-[10px]">
								<Image src={'/main/emotion/언짢음.png'} alt="언짢음" width="44" height="44"/>
							</div>
							<div>
								<p>
									이 편지에서&nbsp;
									<a className="font-bold">전체적</a>
									으로 느껴지는 감정은
								</p>
								<p className="flex items-center">
									<a className="font-bold text-[16px]">언짢음</a>이군요!
								</p>
							</div>
						</div>
						<div className="border-b-[1px]">
							<div className="flex pb-[10px]">
								<div className="px-[10px]">
									<Image src={'/main/emotion/미안함.png'} alt="미안함" width="44" height="44"/>
								</div>
								<div>
									<p>
										이 편지에서&nbsp;
										<a className="font-bold">초반부</a>
										으로 느껴지는 감정은
									</p>
									<p className="flex items-center">
										<a className="font-bold text-[16px]">미안함</a>이군요!
									</p>
								</div>
							</div>

							<div className="flex pb-[10px]">
								<div className="px-[10px]">
									<Image src={'/main/emotion/짜증.png'} alt="짜증" width="44" height="44"/>
								</div>
								<div>
									<p>
										이 편지에서&nbsp;
										<a className="font-bold">중반부</a>
										으로 느껴지는 감정은
									</p>
									<p className="flex items-center">
										<a className="font-bold text-[16px]">짜증</a>이군요!
									</p>
								</div>
							</div>

							<div className="flex pb-[10px]">
								<div className="px-[10px]">
									<Image src={'/main/emotion/언짢음.png'} alt="언짢음" width="44" height="44"/>
								</div>
								<div>
									<p>
										이 편지에서&nbsp;
										<a className="font-bold">후반부</a>
										으로 느껴지는 감정은
									</p>
									<p className="flex items-center">
										<a className="font-bold text-[16px]">언짢음</a>이군요!
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="border-b-[1px] pb-[10px]">
						<p className="pb-[5px]">관심사(주제)</p>
						<div>
							<p className="text-[13px] items-center px-[10px]">
								이 편지의&nbsp;
								<a className="font-medium">관심사(주제)</a>
								는&nbsp;
								<a className="font-medium text-[16px]">결혼식, 신부에게 줄 선물, 축의금</a>
								<a>이군요!</a>
							</p>
						</div>
					</div>
					<div className="border-b-[1px] pb-[10px]">
						<p className="pb-[5px]">갈등</p>
						<div className="text-[13px] px-[10px]">
							<div className="pb-[10px]">
								<a>이 편지에서 보이는 갈등의 원인은</a>
								<a className="text-[16px] font-medium"> {"소통부족"}</a>
								<a>이에요. 이 갈등을 해결하기 위해서는 아래와 같은 노력이 필요해 보여요.</a>
							</div>
							<p>
								<a className="text-ellipsis">연인관의 적극적인 소통이 필요해보입니다. 이를 위해서는 마음의 벽을 열고</a>
							</p>
						</div>
					</div>
					<div className="border-b-[1px] pb-[10px]">
						<p className="pb-[5px]">관계</p>
						<div className="text-[13px] px-[10px]">
							<div className="pb-[10px]">
								<a className="mb-[10px]">이 편지에서 보이는 연인 사이의 관계성은 아래와 같아요.</a>
							</div>
							<p>
								<a className="text-ellipsis">편지는 강한 애정과 로맨스로 가득 차 있습니다. 작성자는 상대방에게 강한 사랑과 애정을 표현하며,
									대단해대단해대단해대단해</a>
							</p>
						</div>
					</div>
					<div className="border-b-[1px] pb-[10px]">
						<p className="pb-[5px]">장소</p>
						<div className="text-[13px] px-[10px]">
							<div className="pb-[10px]">
								<a className="mb-[10px]">이 편지와 연결된 장소는 <a className="font-medium">
									{"카카오 판교오피스"}
								</a>에요.</a>
							</div>
							<div className="flex flex-col text-[12px] text-center">
								<a>이 장소를 타임라인에서 지도와 함께 볼 수 있어요.</a>
								<a className="underline text-[11px] py-[5px]">지도로 보기</a>
								<a className="text-[#AAA] text-[11px]">이 장소는 텍스트를 분석요청할 때 함께 제출된 장소에요.</a>
							</div>
						</div>
					</div>
					<div className="border-b-[1px] pb-[10px]">
						<p className="pb-[5px]">추천</p>
						<div className="text-[13px] px-[10px]">
							<div className="flex flex-col text-[12px]">
								<p>
									<a>연인과 함께 공유할 만한 관심사로
										<a className="text-[16px] font-medium"> {"가을 패션, 가을 요리"}</a>는 어떨까요?
									</a>
								</p>
								<p>
									<a>연인과 함께 즐길만한 데이트 장소로
										<a className="text-[16px] font-medium"> {"바다, 공원"}</a>이 좋을 것 같아요!
									</a>
								</p>
								<p>
									<a>연인과 함께할 취미로
										<a className="text-[16px] font-medium"> {"골프, 산책"}</a>은 어때요?
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="text-[13px] text-center">
						<p className="pb-[10px]">
							<a>
								이 분석결과를 바탕으로 연인에게 편지를 써볼까요?<br/>
								저희가 도와드릴 수 있어요!
							</a>
						</p>
						<a className="underline">편지 쓰러 가기</a>
					</div>
				</div>
			</div>
		</div>
	);
}