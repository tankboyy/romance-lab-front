'use client';

import React, {useEffect, useState} from 'react';

type propsType = {};

export default function Page(props: propsType) {
	const [already, setAlready] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [checking, setChecking] = useState(false);

	useEffect(() => {
		if (inputValue.length === 6) setChecking(true);
		else setChecking(false);
	}, [inputValue]);

	return (
		<div className="max-w-[420px] max-h-[1000px] bg-white flex flex-col w-[100vh] h-[100vh]">
			<div className="flex flex-col justify-between h-full px-[20px]">
				<div>
					<div className="text-[14px] mb-[40px] space-y-[10px] leading-[32px]">
						<p className="text-[24px] font-bold">
							회원정보 입력하기
						</p>
						<p className="leading-[24px]">
							연구를 시작하기 전에, <br/>
							여러분의 정보를 입력해주세요!
						</p>
					</div>
					<div className="text-center mb-[44px]">
						<p className="text-[16px] leading-[24px] pb-[17px]">연인이 이미 애정연구소를 이용하고 있나요?</p>
						<div className="flex justify-center space-x-[10px] text-[16px] font-bold leading-[24px]">
							<button
								className={already ? "w-3/6 h-[40px] rounded-[5px] border-[1px] border-black border-solid" : "w-3/6 h-[40px] rounded-[5px] border-[1px] border-[#E2E2E2] border-solid text-[#AAA]"}
								onClick={() => setAlready(true)}
							>
								<p>
									예
								</p>
							</button>
							<button
								className={!already ? "w-3/6 h-[40px] rounded-[5px] border-[1px] border-black border-solid" : "w-3/6 h-[40px] rounded-[5px] border-[1px] border-[#E2E2E2] border-solid text-[#AAA]"}
								onClick={() => setAlready(false)}
							>
								<p>
									아니요
								</p>
							</button>
						</div>
					</div>
					{
						already &&
              <div>
                  <p className="pl-[6px] text-[14px] pb-[10px]">회원코드</p>
                  <div className="relative flex pb-[22px]">
                      <input type="text" value={inputValue} placeholder="연인의 회원코드를 입력해주세요"
                             className="border-b-[1px] border-black border-b-solid flex justify-between w-full text-[12px] py-[9px] pl-[10px]"
                             onChange={(value) => setInputValue(value.target.value)}/>
                      <div className="absolute right-0 pt-[5px]">
                          <button
                              className={checking ? "w-[50px] h-[20px] bg-[#3668EA] rounded-[5px] text-[11px] text-[#FFF]" : "w-[50px] h-[20px] bg-[#D9D9D9] rounded-[5px] text-[11px]"}
                              onClick={() => alert("클릭")}
                          >
                              <p>확인</p>
                          </button>
                      </div>
                      <div className="absolute bottom-0 pl-[10px] ">
                          <p className="text-[#E84E4E] text-[12px]">회원코드가 유효하지 않아요.</p>
												{/*<p className="text-[#3668EA] text-[12px]">회원코드가 인증됐어요.</p>*/}
                      </div>
                  </div>
              </div>
					}
				</div>
				<div className="flex justify-center pb-[22px]">
					<button
						className="w-full h-[40px] rounded-[5px] bg-[#3668EA] text-[#FFF] text-[12px]"
						// disabled={true}
						// onClick={() => props.setStep(3)}
					>
						<p>다음 단계로</p>
					</button>
				</div>
			</div>
		</div>
	);
}