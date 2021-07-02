import { ICategory } from './wallet/wallet'

export interface IUser {
	id?: string
	name: string
	email: string
	password?: string
	role?: 'client' | 'admin'

	categories: ICategory[]
}
