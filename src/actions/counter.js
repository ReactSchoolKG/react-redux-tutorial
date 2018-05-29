import { INCREMENT} from './actionTypes';
import { DECREMENT} from './actionTypes';
import { RESET} from './actionTypes';

export const increment = () =>({
	type: INCREMENT
})

export const decrement = () =>({
	type: DECREMENT
})

export const reset = () =>({
	type: RESET
})