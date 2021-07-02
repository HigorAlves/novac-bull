import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { CategoryController } from './category.controller'
import { CategoryRepository } from '~/core/category/category.repository'
import { CategoryService } from '~/core/category/category.service'
import { UserSchema } from '~/schemas/user.schema'

describe('CategoryController', () => {
	let controller: CategoryController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
			],
			controllers: [CategoryController],
			providers: [CategoryService, CategoryRepository]
		}).compile()

		controller = module.get<CategoryController>(CategoryController)
	})

	afterAll(done => {
		closeInMongodConnection()
		done()
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
