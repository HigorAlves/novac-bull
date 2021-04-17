import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WalletController } from './wallet.controller'
import { WalletService } from './wallet.service'
import { UserModule } from '~/core/user/user.module'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { WalletSchema } from '~/schemas/wallet.schema'

@Module({
	imports: [
		UserModule,
		MongooseModule.forFeature([{ name: 'Wallet', schema: WalletSchema }]),
		LoggerModule
	],
	controllers: [WalletController],
	providers: [WalletRepository, WalletService],
	exports: [WalletService]
})
export class WalletModule {}
