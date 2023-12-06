'use client';


import Image from "next/image";
import arrow from "/public/main/arrow3.png";
import {useRouter} from "next/navigation";

export default function RootLayout({
																		 children,
																	 }: {
	children: React.ReactNode
}) {

	const router = useRouter();

	function onPageBack() {
		router.back();
	}

	return (
		<html lang="en">
		<body
			className="bg-[#f5f5f5]"
		>
		<main>
			<div className="mb-[26px] m-[20px]">
				<button onClick={onPageBack}>
					<Image alt="화살표" src={arrow}/>
				</button>
			</div>
			{children}
		</main>
		</body>
		</html>
	);
}
;