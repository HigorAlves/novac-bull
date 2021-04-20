export interface Stock {
	symbol: string
	currentPrive: number
}

export interface IMostActiveStocks {
	stocks: [Stock] | any
}
