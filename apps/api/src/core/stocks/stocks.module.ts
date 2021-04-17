import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { StocksController } from './stocks.controller'
import { StocksService } from './stocks.service'
import { StockRepository } from '~/core/stocks/stock.repository'
import { UserModule } from '~/core/user/user.module'
import { WalletModule } from '~/core/wallet/wallet.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { StockSummarySchema } from '~/schemas/stockSummary.schema'

@Module({
	imports: [
		LoggerModule,
		WalletModule,
		UserModule,
		MongooseModule.forFeature([
			{ name: 'StockSummary', schema: StockSummarySchema }
		])
	],
	providers: [StocksService, StockRepository],
	controllers: [StocksController]
})
export class StocksModule {}
