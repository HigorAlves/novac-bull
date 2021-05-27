import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'

import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategys/jwt.strategy'
import { JWT } from '~/constants'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { RecoverySchema } from '~/schemas/recovery.schema'

@Module({
	imports: [
		PassportModule,
		MongooseModule.forFeature([{ name: 'Recovery', schema: RecoverySchema }]),
		JwtModule.register({
			secret: JWT.secret,
			signOptions: { expiresIn: JWT.duration }
		}),
		UserModule,
		LoggerModule
	],
	providers: [JwtStrategy, AuthRepository, AuthService],
	controllers: [AuthController]
})
export class AuthModule {}
