import { ILoginProps, IRegisterProps } from '@jetpack/interfaces'

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
	REGISTER_ERROR = '@auth/REGISTER_ERROR'
}

export interface ILogin {
	type: typeof AuthenticationActionTypes.LOGIN
	payload: ILoginProps
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

export type AuthenticationActions =
	| ILogin
	| ILoginSuccess
	| ILoginError
	| IRegister
	| IRegisterSuccess
	| IRegisterError
