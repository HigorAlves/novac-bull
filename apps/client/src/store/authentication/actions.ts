import * as T from './types'

export function loginRequestAction(
	username: string,
	password: string
): T.ILogin {
	return {
		type: T.ActionTypes.LOGIN_REQUEST,
		payload: {
			username,
			password
		}
	}
}

export function loginSuccess(token: string): T.ILoginSuccess {
	return {
		type: T.ActionTypes.LOGIN_SUCCESS,
		payload: {
			token
		}
	}
}

export function loginFailure(): T.ILoginFailure {
	return {
		type: T.ActionTypes.LOGIN_FAILURE
	}
}

export function registerRequestAction(
	username: string,
	password: string,
	name: string
): T.IRegisterRequest {
	return {
		type: T.ActionTypes.REGISTER_REQUEST,
		payload: {
			username,
			password,
			name
		}
	}
}

export function registerFailureAction(): T.IRegisterFailure {
	return {
		type: T.ActionTypes.REGISTER_FAILURE
	}
}

export function registerSuccessAction(): T.IRegisterSuccess {
	return {
		type: T.ActionTypes.REGISTER_SUCCESS
	}
}
