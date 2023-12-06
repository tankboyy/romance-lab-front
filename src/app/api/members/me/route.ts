import {NextResponse} from "next/server";

export async function GET(req: Request) {

	console.log(req.headers.get("Authorization"));

	return NextResponse.json({
		email: "wooyeon@gmail.com",
		nickname: "우연임",
		age: 25,
		memberCode: "80AM41",
		vendor: "System",
		authEntitySet: [
			{
				"authorityName": "ROLE_MEMBER"
			}
		]
	});
}