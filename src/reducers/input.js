import { INPUTDATA } from "../actions/actionTypes";

const initialState = {
	value: ""
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case INPUTDATA:
			return {
				...state,
				value: payload
			};

		default:
			return state;
	}
};
