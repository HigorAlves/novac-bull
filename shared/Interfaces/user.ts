import { IStock } from './stock/summary'

export interface IUser {
	id?: string
	email: string
	password?: string
	name: string
	image: string
	locale: { currency: 'BRL' | 'USD'; language: 'pt-BR' | 'en-US' }
	cpf: string
	role?: 'client' | 'admin'
}

export interface IUserPosition {
	checkingAccountAmount: number
	positions: IStock[]
	consolidated: number
}
