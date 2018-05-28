import {INPUTDATA} from './actionTypes'

export const processInput = (value) => dispatch => {
	dispatch({
		type: INPUTDATA,
		payload: value
	})
	
}

