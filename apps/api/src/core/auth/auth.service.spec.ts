import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'
import { Test, TestingModule } from '@nestjs/testing'

import { AuthService } from './auth.service'
import { JWT } from '~/constants'
import { AuthRepository } from '~/core/auth/auth.repository'
import { JwtStrategy } from '~/core/auth/strategys/jwt.strategy'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { RecoverySchema } from '~/schemas/recovery.schema'
import {
	closeInMongodConnection,
	rootMongooseTestModule
} from '~/utils/mongodb-test'

describe('AuthService', () => {
	let service: AuthService

	afterAll(async () => {
		await closeInMongodConnection()
	})

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				rootMongooseTestModule(),
				UserModule,
				PassportModule,
				MongooseModule.forFeature([
					{ name: 'Recovery', schema: RecoverySchema }
				]),
				JwtModule.register({
					secret: JWT.secret,
					signOptions: { expiresIn: JWT.duration }
				}),
				LoggerModule
			],
			providers: [AuthService, JwtStrategy, AuthRepository]
		}).compile()
		service = module.get<AuthService>(AuthService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
