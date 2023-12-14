import {atom} from "recoil";
import PlacesSearchResultItem = kakao.maps.services.PlacesSearchResultItem;

export const userState = atom({
	key: 'userState',
	default: {
		me: {
			name: '',
			age: '',
			gender: ''
		},
		you: {
			name: '',
			age: '',
			gender: ''
		},
		date: ''
	}
});

export interface TimelineListType {
	title: string;
	place: PlacesSearchResultItem | undefined;
	text: string;
	textClassify: string;
	selectCouple: string;
	selectType: string;
	createAt: string;
}

export const timelineListState = atom<TimelineListType[]>({
	key: 'timelineListState',
	default: [
		{
			title: '안녕',
			place: {
				"address_name": "경기 오산시 궐동 147",
				"category_group_code": "",
				"category_group_name": "",
				"category_name": "여행 > 관광,명소 > 문화유적 > 사당,제단",
				"distance": "",
				"id": "12532314",
				"phone": "031-373-0151",
				"place_name": "궐리사",
				"place_url": "http://place.map.kakao.com/12532314",
				"road_address_name": "경기 오산시 매홀로 3",
				"x": "127.062679988373",
				"y": "37.1591650976871"
			},
			text: "반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워반가워",
			textClassify: '편지',
			selectCouple: '연인1연인1연인1연인1연인1연인1연인1연인1연인1',
			selectType: '연인2',
			createAt: '2021.09.16'
		}
	],
});

export const userDataState = atom({
	key: 'userDataState',
	default: {
		email: "",
		nickname: "",
		age: 0,
		memberCode: "",
		vendor: "",
		authEntitySet: [
			{
				authorityName: ""
			}
		]
	}
});

export const coupleDataState = atom({
	key: 'coupleDataState',
	default: {
		email: "",
		nickname: "",
		age: 0,
		memberCode: "",
		vendor: "",
		authEntitySet: [
			{
				authorityName: ""
			}
		]
	}
});

export const userLogin = atom({
	key: 'userLogin',
	default: {
		auth: "",
		refresh: "",
		state: false
	}
});

