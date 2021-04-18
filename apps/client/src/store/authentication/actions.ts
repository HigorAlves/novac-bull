import {
	ILogin as ILoginProps,
	IUser as IRegisterProps
} from '@jetpack/interfaces'
import { History } from 'history'

import * as Types from 'store/authentication/types'

export function requestLogin(
	login: ILoginProps,
	history: History
): Types.ILogin {
	const { password, email } = login
	return {
		type: Types.AuthenticationActionTypes.LOGIN,
		payload: {
			email,
			password,
			history
		}
	}
}

export function loggedIn(token: string): Types.ILoginSuccess {
	return {
		type: Types.AuthenticationActionTypes.LOGIN_SUCCESS,
		payload: {
			token
		}
	}
}

export function errorLogin(): Types.ILoginError {
	return {
		type: Types.AuthenticationActionTypes.LOGIN_ERROR
	}
}
export function requestRegister(payload: IRegisterProps): Types.IRegister {
	return {
		type: Types.AuthenticationActionTypes.REGISTER,
		payload
	}
}

export function registerSuccess(token: string): Types.IRegisterSuccess {
	return {
		type: Types.AuthenticationActionTypes.REGISTER_SUCCESS,
		payload: {
			token
		}
	}
}

export function errorRegister(): Types.IRegisterError {
	return {
		type: Types.AuthenticationActionTypes.REGISTER_ERROR
	}
}

export function verifyLogin(history: any, token: string): Types.IVerifyLogin {
	return {
		type: Types.AuthenticationActionTypes.VERIFY_LOGIN,
		payload: {
			history,
			token
		}
	}
}
