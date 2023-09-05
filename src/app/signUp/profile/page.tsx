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
		<div className="w-[375px] h-[667px] relative m-[20px]">
			{step === 1 ?
				<OneStep setStep={setStep}/> : step === 2 ?
					<TwoStep setStep={setStep}/> : <ThreeStep/>
			}
		</div>
	);
}