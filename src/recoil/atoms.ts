import {atom} from "recoil";

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

