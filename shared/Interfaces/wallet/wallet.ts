export interface ITransaction {
	id?: string
	amount: number
	category: string
	createdAt?: Date
	updatedAt?: Date
}

export interface IWallet {
	owner: string
	amount: number
	transactions: [ITransaction] | null
	createdAt?: Date
	updatedAt?: Date
}
