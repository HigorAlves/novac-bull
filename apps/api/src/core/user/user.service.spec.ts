import { IUser } from '@jetpack/interfaces'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { LoggerModule } from '../../../test/mocks/logger.interceptor'
import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { UserService } from './user.service'
import { HTTP_CODE } from '~/constants/httpCode'
import { UserRepository } from '~/core/user/user.repository'
import { UserSchema } from '~/schemas/user.schema'

describe('User Services', () => {
	let service: UserService
	const userData: IUser = {
		name: 'Savio Estolando',
		email: 'savioestolando@maneirao.dev',
		password: 'estolandounsaviao',
		role: 'client'
	}

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				LoggerModule,
				MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
			],
			providers: [UserRepository, UserService]
		}).compile()

		service = module.get<UserService>(UserService)
	})

	afterAll(() => {
		closeInMongodConnection()
	})

	it('should be defined', async () => {
		expect(service).toBeDefined()
	})

	it('should update user data', async () => {
		const { data } = await service.create(userData)
		const result = await service.update(data.id, {
			name: 'higor alves',
			email: 'higoralves@novac.money'
		})

		expect(result.status).toEqual(HTTP_CODE.OK)
	})
})
