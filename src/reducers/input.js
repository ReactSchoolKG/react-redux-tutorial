import {CHANGEINPUT} from '../actions/actionTypes'


const initialState = {
	value: ''
}

export default (state = initialState,action) => {
	switch (action.type){
		case CHANGEINPUT: return {
			...state,
			value: action.value
		}
		default: return state
	}
}