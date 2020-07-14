import {combineReducers} from 'redux';


const listReducer = (state =[], action) => {
	if (action.type === "ADD_MESSAGE") {
		const { text } = action;
		return [...state, text];
	} else if (action.type === "DELETE_MESSAGE") {
		const { index } = action;
		let newState = [...state];
		newState.splice(index, 1);
		return newState;
	} else if (action.type === "GET_MESSAGE") {
		const {texts} = action;
		return [...texts, ...state];
	} else if (action.type === "CLEAR_MESSAGES") {
		return [];
	} else {
		return state;
	}
} 

export default combineReducers ({
	list: listReducer,
})

