export interface IUser {
	email: string
	password?: string
	name: string
	image: string
	locale: { currency: 'BRL' | 'USD'; language: 'pt-BR' | 'en-US' }
	cpf: string
	role?: 'client' | 'admin'
}
