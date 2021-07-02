import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { CategoryService } from './category.service'
import { CategoryRepository } from '~/core/category/category.repository'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'

describe('Category Service', () => {
	let service: CategoryService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				LoggerModule,
				MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
				UserModule
			],
			providers: [CategoryService, CategoryRepository]
		}).compile()

		service = module.get<CategoryService>(CategoryService)
	})

	afterAll(done => {
		closeInMongodConnection()
		done()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
