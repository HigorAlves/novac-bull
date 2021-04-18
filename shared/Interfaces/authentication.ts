export type TRole = 'admin' | 'client'

export interface ILogin {
	email: string
	password: string
}

export interface INewPassword {
	email: string
	password: string
	code: string
}

export interface IUpdatePassword {
	email: string
	oldPassword: string
	newPassword: string
}

export interface IJWT {
	role: TRole
	email: string
}

export interface IResponse<T = void> {
	status: number
	error: boolean
	message: string
	token?: string
	data?: T
}
