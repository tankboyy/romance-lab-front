import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
	const coupleId = req.url.split('info/')?.[1];

	return NextResponse.json({
			email: "doljung@gmail.com",
			nickname: "돌중이",
			age: 25,
			memberCode: "4168AM",
			vendor: "System",
			authEntitySet: [
				{
					authorityName: "ROLE_MEMBER"
				}
			]
		}
	);
}