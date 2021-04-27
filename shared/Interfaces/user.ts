export interface IUser {
	id?: string
	email: string
	password?: string
	name: string
	image: string
	locale: { currency: 'BRL' | 'USD'; language: 'pt-BR' | 'en-US' }
	role?: 'client' | 'admin'
}
