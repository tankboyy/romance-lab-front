import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";


const kakaoCustomProvider = KakaoProvider({
	clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID ?? '',
	clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET ?? '',
});
kakaoCustomProvider.style = {
	logo: 'https://www.kakaocorp.com/page/favicon.ico',
	logoDark: 'https://www.kakaocorp.com/page/favicon.ico',
	bgDark: '#FEE500',
	bg: '#FEE500',
	text: '#191919',
	textDark: '#191919',
};

const handler = NextAuth(
	{
		providers: [
			kakaoCustomProvider,
			GoogleProvider({
				clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
				clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? ''
			})
		],
		pages: {
			signIn: "/login"
		},
		callbacks: {
			// async signIn(res) {
			// 	console.log(res);
			// 	return '';
			// }
		}
	}
);

export {handler as GET, handler as POST};