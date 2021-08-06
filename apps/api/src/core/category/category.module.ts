import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { CategoryRepository } from '~/core/category/category.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { UserSchema } from '~/schemas/user.schema'

@Module({
	imports: [
		LoggerModule,
		MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
	],
	providers: [CategoryService, CategoryRepository],
	controllers: [CategoryController]
})
export class CategoryModule {}
