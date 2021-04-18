import { forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { WalletController } from './wallet.controller'
import { UserModule } from '~/core/user/user.module'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { WalletService } from '~/core/wallet/wallet.service'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { WalletSchema } from '~/schemas/wallet.schema'
import { rootMongooseTestModule } from '~/utils/mongodb-test'

describe('WalletController', () => {
	let controller: WalletController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				forwardRef(() => UserModule),
				MongooseModule.forFeature([{ name: 'Wallet', schema: WalletSchema }]),
				LoggerModule
			],
			controllers: [WalletController],
			providers: [WalletRepository, WalletService]
		}).compile()

		controller = module.get<WalletController>(WalletController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
