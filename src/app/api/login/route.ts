import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function POST(req: Request) {
	const data = await req.json();
	const {email, password} = data;

	if (email === 'heodange@naver.com' && password === 'qwe123!@#') {
		console.log(email, "로그인 성공");
		return NextResponse.json({
			message: "로그인 성공",
			token: "token"
		}, {
			headers: {
				'Set-Cookie': "refresh-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDAxNDEyMDQsInN1YiI6InJlZnJlc2gtdG9rZW4ifQ.64XQnpiwQntYhEJYEBGYg4-52HeMkios3cS4j9SSeKqJKETKRrRNwfoiirqZHqPNwUFjlFphgSSa3xPwx9vnIg; Max-Age=7776000; Expires=Wed, 31 Jan 2024 13:26:44 GMT; Secure; HttpOnly",
				'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2OTkwMTgwMDQsInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHBzOi8vbG9jYWxob3N0OjgwODAiOnRydWUsImVtYWlsIjoid29veWVvbkBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9NRU1CRVIifQ.pWGgx1z0DlqHwijnnLiiaL16B6y82oFvOGCPbDnAV7DWQLGz9zgPexdxom4mfJh8LJ0_TO1eAexHI8xCN7Xcqg",
			}
		});
	} else return NextResponse.json({
		message: "로그인 실패"
	});
}