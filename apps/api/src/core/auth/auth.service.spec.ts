import { IUser } from '@jetpack/interfaces'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'
import { Test, TestingModule } from '@nestjs/testing'

import { LoggerModule } from '../../../test/mocks/logger.interceptor'
import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '../../../test/utils/mongodb'
import { JWT } from '~/constants'
import { HTTP_CODE } from '~/constants/httpCode'
import { AuthRepository } from '~/core/auth/auth.repository'
import { AuthService } from '~/core/auth/auth.service'
import { JwtStrategy } from '~/core/auth/strategys/jwt.strategy'
import { UserModule } from '~/core/user/user.module'
import { RecoverySchema } from '~/schemas/recovery.schema'

describe('Authentication Service', () => {
	let service: AuthService

	const user: IUser = {
		name: 'Savio Estolando',
		email: 'savioestolando@maneirao.dev',
		password: 'estolandounsaviao',
		role: 'client',
		categories: null
	}

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				PassportModule,
				MongooseModule.forFeature([
					{ name: 'Recovery', schema: RecoverySchema }
				]),
				JwtModule.register({
					secret: JWT.secret,
					signOptions: { expiresIn: JWT.duration }
				}),
				UserModule,
				LoggerModule
			],
			providers: [JwtStrategy, AuthRepository, AuthService]
		}).compile()

		service = module.get<AuthService>(AuthService)
	})

	afterAll(done => {
		closeInMongodConnection()
		done()
	})

	it('should be defined', async () => {
		expect(service).toBeDefined()
	})

	it('should register a new user', async () => {
		const result: IResponse = await service.register(user)
		expect(result.status).toEqual(HTTP_CODE.Created)
	})

	it('should login savão', async () => {
		const result: IResponse = await service.login({
			email: user.email,
			password: 'estolandounsaviao'
		})
		const isTokenValid: IResponse<boolean> = await service.isTokenValid(
			result.token
		)
		expect(isTokenValid.data).toBeTruthy()
		expect(result.status).toEqual(HTTP_CODE.OK)
	})

	it('shouldnt create duplicate registers', async () => {
		const result: IResponse = await service.register(user)
		expect(result.status).toEqual(HTTP_CODE.Conflict)
	})
})
