import { IMostActiveStocks, IOrder, IStock } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { StockRepository } from '~/core/stocks/stock.repository'
import { UserRepository } from '~/core/user/user.repository'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { MyLogger } from '~/interceptors/logger.interceptor'
import { getStock } from '~/utils/iexCloud'

@Injectable()
export class StocksService {
	constructor(
		private logger: MyLogger,
		private repository: StockRepository,
		private wallet: WalletRepository,
		private user: UserRepository
	) {
		this.logger.setContext('STOCK_SERVICE')
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

	async buyStocks(order: IOrder, userMail: string): Promise<IResponse<void>> {
		this.logger.log('New order to buy stocks')
		const stock = await getStock(order.symbol)
		const user = await this.user.get(userMail)
		const wallets = await this.wallet.getWallets(user.id)
		const wallet = wallets[0]
		const totalToPay = stock.latestPrice * order.amount

		if (totalToPay < wallet.amount) {
			const currentWalletAmount = wallet.amount - totalToPay
			const data: IStock[] = []
			for (let i = 0; i < order.amount; i++) {
				data.push({
					symbol: order.symbol,
					buyPrice: stock.latestPrice,
					createdAt: new Date()
				})
			}
			await this.repository.registerStocks(user.id, data)
			await wallet.update({ amount: currentWalletAmount })

			return {
				message: 'You have bought new stocks',
				error: false,
				status: 201
			}
		} else {
			return {
				message: 'This account doesnt have enought money',
				error: false,
				status: 200
			}
		}

		return {
			message: 'Something went wrong',
			error: true,
			status: 400
		}
	}
}
