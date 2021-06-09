import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { LoggerModule } from '../../../test/mocks/logger.interceptor'
import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { LeadController } from './lead.controller'
import { LeadRepository } from '~/core/lead/lead.repository'
import { LeadService } from '~/core/lead/lead.service'
import { LeadSchema } from '~/schemas/lead.schema'

describe('LeadController', () => {
	let controller: LeadController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }]),
				LoggerModule
			],
			providers: [LeadService, LeadRepository],
			controllers: [LeadController]
		}).compile()

		controller = module.get<LeadController>(LeadController)
	})

	afterAll(done => {
		closeInMongodConnection()
		done()
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
