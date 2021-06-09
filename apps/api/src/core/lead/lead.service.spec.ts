import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { LeadService } from './lead.service'
import { HTTP_CODE } from '~/constants/httpCode'
import { LeadRepository } from '~/core/lead/lead.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { LeadSchema } from '~/schemas/lead.schema'

describe('LeadService', () => {
	let service: LeadService

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }]),
				LoggerModule
			],
			providers: [LeadService, LeadRepository]
		}).compile()

		service = module.get<LeadService>(LeadService)
	})

	afterAll(done => {
		closeInMongodConnection()
		done()
	})

	it('should be defined', async () => {
		expect(service).toBeDefined()
	})

	it('should create a lead inside database', async () => {
		const result: IResponse = await service.registerNewLead('lead@email.com')
		expect(result.status).toEqual(HTTP_CODE.Created)
	})
})
