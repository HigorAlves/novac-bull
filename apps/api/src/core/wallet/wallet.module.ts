import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WalletController } from './wallet.controller'
import { WalletService } from './wallet.service'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { WalletSchema } from '~/schemas/wallet.schema'

@Module({
	imports: [
		LoggerModule,
		MongooseModule.forFeature([{ name: 'Wallet', schema: WalletSchema }])
	],
	providers: [WalletService, WalletRepository],
	controllers: [WalletController]
})
export class WalletModule {}
