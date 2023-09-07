import './globals.css';
import Script from "next/script";

export default function RootLayout({children,}: { children: React.ReactNode }) {
	return (
		<html lang="ko">
		<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
		<body>
		{children}
		</body>
		</html>
	);
}
