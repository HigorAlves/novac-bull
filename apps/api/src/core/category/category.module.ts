import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { CategoryService } from './category.service'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'

@Module({
	imports: [
		LoggerModule,
		UserModule,
		MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
	],
	providers: [CategoryService]
})
export class CategoryModule {}
