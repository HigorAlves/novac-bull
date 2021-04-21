import { IMostActiveStocks, IResponse } from '@jetpack/interfaces'
import { Severity } from '@sentry/browser'
import * as Sentry from '@sentry/browser'

import api from './api'

export async function getStockTrends(): Promise<IMostActiveStocks | null> {
	try {
		const { data }: { data: IResponse<IMostActiveStocks> } = await api.get(
			'/stocks/trends'
		)
		return data.data as IMostActiveStocks
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('STOCKS', 'GET_TRENDS')
			scope.setLevel(Severity.Error)
			Sentry.captureException(e)
		})
		return null
	}
}

export async function buyStock(
	amount: number,
	symbol: string
): Promise<boolean> {
	try {
		await api.post('/stocks/order', {
			amount,
			symbol
		})
		return true
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('STOCKS', 'GET_TRENDS')
			scope.setLevel(Severity.Error)
			Sentry.captureException(e)
		})
		return false
	}
}
