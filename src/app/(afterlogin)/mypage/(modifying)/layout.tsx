'use client';
import {redirect, usePathname, useRouter} from "next/navigation";
import React from "react";
import Image from "next/image";
import arrow from "/public/main/arrow3.png";


export default function Layout({
																 children, // will be a page or nested layout
															 }: { children: React.ReactNode }) {
	const router = useRouter();

	function onPageBack() {
		router.back();
	}

	return (
		<section>
			<main>
				<div className="mb-[26px] m-[20px]">
					<button onClick={onPageBack}>
						<Image alt="화살표" src={arrow}/>
					</button>
				</div>
				{children}
			</main>
		</section>
	);
}