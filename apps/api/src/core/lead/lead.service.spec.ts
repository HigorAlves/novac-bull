import * as path from 'path'

import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import {
	AcceptLanguageResolver,
	CookieResolver,
	HeaderResolver,
	I18nJsonParser,
	I18nModule,
	QueryResolver
} from 'nestjs-i18n'

import { LeadService } from './lead.service'
import { HTTP_CODE } from '~/constants/httpCode'
import { LeadRepository } from '~/core/lead/lead.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { LeadSchema } from '~/schemas/lead.schema'
import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '~/utils/mongodb-test'

describe('LeadService', () => {
	let service: LeadService

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }]),
				I18nModule.forRoot({
					fallbackLanguage: 'en',
					parser: I18nJsonParser,
					parserOptions: {
						path: path.join(__dirname, '../../i18n')
					},
					resolvers: [
						{ use: QueryResolver, options: ['lang', 'locale', 'l'] },
						new HeaderResolver(['x-custom-lang']),
						AcceptLanguageResolver,
						new CookieResolver(['lang', 'locale', 'l'])
					]
				}),
				LoggerModule
			],
			providers: [LeadRepository, LeadService]
		}).compile()

		service = module.get<LeadService>(LeadService)
	})

	afterAll(async () => {
		await closeInMongodConnection()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should create a lead inside database', async () => {
		const result: IResponse = await service.registerNewLead('lead@email.com')
		console.log(result, 'aqui')
		expect(result.status).toEqual(HTTP_CODE.Created)
	})
})
