import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { MongoClient } from 'mongodb'

import { LeadService } from './lead.service'
import { HTTP_CODE } from '~/constants/httpCode'
import { LeadRepository } from '~/core/lead/lead.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { LeadSchema } from '~/schemas/lead.schema'

describe('LeadService', () => {
	let service: LeadService
	let db

	beforeAll(async () => {
		const connection = await MongoClient.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		db = connection.db()
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }]),
				LoggerModule
			],
			providers: [LeadService, LeadRepository]
		}).compile()

		service = module.get<LeadService>(LeadService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should create a lead inside database', async () => {
		const result: IResponse = await service.registerNewLead('lead@email.com')
		expect(result.status).toEqual(HTTP_CODE.Created)
	})
})
