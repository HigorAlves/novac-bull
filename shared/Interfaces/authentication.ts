export type TRole = 'admin' | 'client'

export interface ILoginProps {
	email: string
	password: string
}

export interface IRegisterProps {
	fullname: string
	email: string
	password: string
}

export interface IJWT {
	role: TRole
	email: string
}
