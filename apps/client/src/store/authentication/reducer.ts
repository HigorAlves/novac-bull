import { Reducer } from 'redux'

import {
	AuthenticationActionTypes,
	IAuthenticationState,
	AuthenticationActions
} from './types'

const INITIAL_STATE: IAuthenticationState = {
	token: null,
	error: false,
	loading: false
}

export const authenticationReducer: Reducer<
	IAuthenticationState,
	AuthenticationActions
> = (state = INITIAL_STATE, action: AuthenticationActions) => {
	switch (action.type) {
		case AuthenticationActionTypes.LOGIN:
			return { ...state, loading: true }
		case AuthenticationActionTypes.REGISTER:
			return { ...state, loading: true }
		case AuthenticationActionTypes.LOGIN_SUCCESS:
			return { ...state, loading: false, token: action.payload.token }
		case AuthenticationActionTypes.LOGIN_ERROR:
			return { ...state, loading: false, error: true }
		case AuthenticationActionTypes.REGISTER_SUCCESS:
			return { ...state, loading: false, token: action.payload.token }
		case AuthenticationActionTypes.REGISTER_ERROR:
			return { ...state, loading: false, error: true }
		default:
			return state
	}
}
