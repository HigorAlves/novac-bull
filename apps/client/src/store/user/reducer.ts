import { Reducer } from 'redux'

import { IUserState, UserActions, UserActionTypes } from './types'

const INITIAL_STATE: IUserState = {
	data: null,
	position: null,
	loading: false
}

export const userReducer: Reducer<IUserState, UserActions> = (
	state = INITIAL_STATE,
	action: UserActions
) => {
	switch (action.type) {
		case UserActionTypes.GET_DATA:
			return { ...state, loading: true }
		case UserActionTypes.GET_DATA_SUCCESS:
			return { ...state, data: action.payload, loading: false }
		case UserActionTypes.GET_DATA_FAILURE:
			return { ...state, data: null, loading: false }
		case UserActionTypes.GET_POSITION:
			return { ...state, loading: true }
		case UserActionTypes.GET_POSITION_SUCCESS:
			return { ...state, loading: false, position: action.payload }
		case UserActionTypes.GET_POSITION_FAILURE:
			return { ...state, loading: false, position: null }
		default:
			return state
	}
}
