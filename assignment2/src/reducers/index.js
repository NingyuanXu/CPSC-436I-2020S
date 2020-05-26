import { combineReducers } from 'redux';

const counterReducer = (state, action) => {
	if (action.type === 'ADD_MESSAGE') {
		return ;
	}
	return state;
};

export default combineReducers({
	count: combineReducers;
});
