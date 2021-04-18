import {
	ILogin as ILoginProps,
	IUser as IRegisterProps
} from '@jetpack/interfaces'

import {
	AuthenticationActionTypes,
	ILogin,
	ILoginError,
	ILoginSuccess,
	IRegister,
	IRegisterError,
	IRegisterSuccess,
	IVerifyLogin
} from './types'

export function requestLogin(payload: ILoginProps): ILogin {
	return {
		type: AuthenticationActionTypes.LOGIN,
		payload
	}
}

export function loggedIn(token: string): ILoginSuccess {
	return {
		type: AuthenticationActionTypes.LOGIN_SUCCESS,
		payload: {
			token
		}
	}
}

export function erroLogin(): ILoginError {
	return {
		type: AuthenticationActionTypes.LOGIN_ERROR
	}
}

export function requestRegister(payload: IRegisterProps): IRegister {
	return {
		type: AuthenticationActionTypes.REGISTER,
		payload
	}
}

export function registerSuccess(token: string): IRegisterSuccess {
	return {
		type: AuthenticationActionTypes.REGISTER_SUCCESS,
		payload: {
			token
		}
	}
}

export function errorRegister(): IRegisterError {
	return {
		type: AuthenticationActionTypes.REGISTER_ERROR
	}
}

export function verifyLogin(history: any, token: string): IVerifyLogin {
	return {
		type: AuthenticationActionTypes.VERIFY_LOGIN,
		payload: {
			history,
			token
		}
	}
}
