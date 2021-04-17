export interface IStock {
	symbol: string
	buyPrice: number
	createdAt: Date
}

export interface IStockSummary {
	id?: string
	owner: string
	stocks: IStock[] | undefined
	createdAt?: Date
	updatedAt?: Date
}
