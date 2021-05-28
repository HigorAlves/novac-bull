import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'

@Module({
	imports: [
		LoggerModule,
		MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
	],
	providers: [UserRepository, UserService],
	exports: [UserService, UserRepository]
})
export class UserModule {}
