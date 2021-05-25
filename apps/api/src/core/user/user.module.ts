import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { UserController } from '~/core/user/user.controller'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'

@Module({
	imports: [
		LoggerModule,
		MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
	],
	providers: [UserRepository, UserService],
	controllers: [UserController],
	exports: [UserService, UserRepository]
})
export class UserModule {}
