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
			place: undefined,
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

