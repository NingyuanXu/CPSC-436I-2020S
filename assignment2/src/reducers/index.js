import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions'
import {combineReducers} from 'redux';


const listReducer = (state =["This is the first message!"], action) => {
	if (action.type === "ADD_MESSAGE") {
		const { text } = action;
		return [...state, text];
	} else if (action.type === "DELETE_MESSAGE") {
		const { index } = action;
		let newState = [...state];
		newState.splice(index, 1);
		return newState;
	} else {
		return state;
	}
} 

export default combineReducers ({
	list: listReducer,
})

