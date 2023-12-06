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

export const userLogin = atom({
	key: 'userLogin',
	default: {
		auth: "",
		refresh: "",
		state: false
	}
});

