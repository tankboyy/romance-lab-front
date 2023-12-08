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
}

export const timelineListState = atom<TimelineListType[]>({
	key: 'timelineListState',
	default: [],
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

