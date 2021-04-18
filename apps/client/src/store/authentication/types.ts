import { IUser as IRegisterProps } from '@jetpack/interfaces'
import { History } from 'history'

export interface IAuthenticationState {
	token: string | null
	error: boolean
	loading: boolean
}

export enum AuthenticationActionTypes {
	LOGIN = '@auth/LOGIN',
	LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
	LOGIN_ERROR = '@auth/LOGIN_ERROR',
	REGISTER = '@auth/REGISTER',
	REGISTER_SUCCESS = '@auth/REGISTER_SUCCESS',
	REGISTER_ERROR = '@auth/REGISTER_ERROR',
	VERIFY_LOGIN = '@auth/VERIFY_LOGIN'
}

export interface ILogin {
	type: typeof AuthenticationActionTypes.LOGIN
	payload: {
		email: string
		password: string
		history: History
	}
}

export interface ILoginSuccess {
	type: typeof AuthenticationActionTypes.LOGIN_SUCCESS
	payload: {
		token: string
	}
}

export interface ILoginError {
	type: typeof AuthenticationActionTypes.LOGIN_ERROR
}

export interface IRegister {
	type: typeof AuthenticationActionTypes.REGISTER
	payload: IRegisterProps
}

export interface IRegisterSuccess {
	type: typeof AuthenticationActionTypes.REGISTER_SUCCESS
	payload: {
		token: string
	}
}

export interface IRegisterError {
	type: typeof AuthenticationActionTypes.REGISTER_ERROR
}

export interface IVerifyLogin {
	type: typeof AuthenticationActionTypes.VERIFY_LOGIN
	payload: {
		history: History
		token: string
	}
}

export type AuthenticationActions =
	| ILogin
	| ILoginSuccess
	| ILoginError
	| IRegister
	| IRegisterSuccess
	| IRegisterError
	| IVerifyLogin
