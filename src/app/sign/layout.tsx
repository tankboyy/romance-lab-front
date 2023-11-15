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
		<body>
		<div className="max-w-[420px] min-h-screen bg-white flex flex-col w-[100vw] h-[100vh] p-[20px]">
			<div className="mb-[26px]">
				<button onClick={onPageBack}>
					<Image alt="화살표" src={arrow}/>
				</button>
			</div>
			{children}
		</div>
		</body>
		</html>
	);
}
;