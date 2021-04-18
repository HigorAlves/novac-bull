import { forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { UserService } from './user.service'
import { StocksModule } from '~/core/stocks/stocks.module'
import { UserController } from '~/core/user/user.controller'
import { UserRepository } from '~/core/user/user.repository'
import { WalletModule } from '~/core/wallet/wallet.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'
import { rootMongooseTestModule } from '~/utils/mongodb-test'

describe('UserService', () => {
	let provider: UserService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				forwardRef(() => WalletModule),
				forwardRef(() => StocksModule),
				LoggerModule,
				MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
			],
			providers: [UserRepository, UserService],
			controllers: [UserController],
			exports: [UserService, UserRepository]
		}).compile()

		provider = module.get<UserService>(UserService)
	})

	it('should be defined', () => {
		expect(provider).toBeDefined()
	})
})
