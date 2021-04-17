import { Module } from '@nestjs/common'

import { StocksController } from './stocks.controller'
import { StocksService } from './stocks.service'
import { LoggerModule } from '~/interceptors/logger.interceptor'

@Module({
	imports: [LoggerModule],
	providers: [StocksService],
	controllers: [StocksController]
})
export class StocksModule {}
