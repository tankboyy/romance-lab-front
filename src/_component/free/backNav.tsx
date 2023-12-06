'use client';

import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";
import arrow from "/public/main/arrow3.png";

export default function BackNav() {
	const router = useRouter();

	function onPageBack() {
		router.back();
	}

	return (
		<>
			<button onClick={onPageBack}>
				<Image alt="화살표" src={arrow}/>
			</button>
		</>
	);
}