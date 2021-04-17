import { IMostActiveStocks } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { MyLogger } from '~/interceptors/logger.interceptor'
import { getStock } from '~/utils/iexCloud'

@Injectable()
export class StocksService {
	constructor(private logger: MyLogger) {
		this.logger.setContext('StocksService')
	}

	async getMostActiveStocks(): Promise<IResponse<IMostActiveStocks>> {
		const mostNegotietaded = ['CLOV', 'AAPL', 'EBON', 'AMD', 'FCEL']
		const data: IMostActiveStocks = {
			stocks: []
		}

		for await (const code of mostNegotietaded) {
			const stock = await getStock(code)
			data.stocks.push({ symbol: code, currentPrive: stock.latestPrice })
		}

		return {
			status: 200,
			message: 'Most active stocks on market',
			error: false,
			data
		}
	}
}
