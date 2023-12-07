import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {coupleDataState, userDataState} from "@/recoil/atoms";
import {useRouter} from "next/navigation";

export default function UseUpdateUser() {
	const [userData, setUserData] = useRecoilState(userDataState);
	const [coupleData, setCoupleData] = useRecoilState(coupleDataState);
	const router = useRouter();

	useEffect(() => {
		const userToken = localStorage.getItem('token');
		const getUserData = async () => {
			await fetch('api/members/me', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			}).then(async (res) => {
				const data = await res.json();
				setUserData(data);
			});
		};

		const getCoupleData = async () => {
			await fetch('api/couples/info/ASDFGH', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			}).then(async (res) => {
				const data = await res.json();
				setCoupleData(data);
			});
		};
		if (!userToken) {
			router.push('/login');
		} else {
			getUserData();
			getCoupleData();
		}
	}, []);

}