export enum CategoryType {
	INCOME = 0,
	EXPENSE = 1,
	TRANSFER = 2
}

export interface ICategory {
	id?: string
	name: string
	icon: string
	backgroundColor: string
	type: CategoryType
}

export interface ITransaction {
	id?: string
	amount: number
	category: ICategory
	createdAt?: Date
	updatedAt?: Date
}

export interface IWallet {
	id?: string
	name: string
	description: string
	isDefault: boolean
	owner: string
	initialAmount: number
	amount: number
	transactions: [ITransaction] | null
	createdAt?: Date
	updatedAt?: Date
}
