import { IStock, IStockSummary } from '@jetpack/interfaces'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { StockSummaryDocument } from '~/schemas/stockSummary.schema'

@Injectable()
export class StockRepository {
	private logger = new Logger('STOCK_REPOSITORY')

	constructor(
		@InjectModel('StockSummary') private Database: Model<StockSummaryDocument>
	) {}

	async createStockSummary(uid: string): Promise<boolean> {
		const summary: IStockSummary = {
			owner: uid,
			stocks: []
		}
		const data = new this.Database(summary)

		try {
			await data.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async registerStocks(uid: string, stock: IStock[]): Promise<boolean> {
		const summary = await this.Database.findOne({ owner: uid }).exec()
		let stocks = []
		if (!summary) {
			await this.createStockSummary(uid)
		} else {
			if (summary.stocks) {
				stocks = summary.stocks
			}
		}

		stock.forEach(item => stocks.push(item))

		try {
			await summary.updateOne({ stock: stocks })
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
