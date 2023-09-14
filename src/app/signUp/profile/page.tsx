'use client';

import React, {useState} from 'react';
import InputComponent from "./inputComponent";
import OneStep from "./oneStep";
import TwoStep from "./twoStep";
import ThreeStep from "./threeStep";

type propsType = {};

export default function Page(props: propsType) {
	const [step, setStep] = useState<number>(1);
	return (
		<div className="max-w-[420px] max-h-[1000px] bg-white flex flex-col w-[100vh] h-[100vh] p-[20px]">
			{step === 1 ?
				<OneStep setStep={setStep}/> : step === 2 ?
					<TwoStep setStep={setStep}/> : <ThreeStep/>
			}
		</div>
	);
}