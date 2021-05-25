import * as path from 'path'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import {
	AcceptLanguageResolver,
	CookieResolver,
	HeaderResolver,
	I18nJsonParser,
	I18nModule,
	QueryResolver
} from 'nestjs-i18n'

import { AppController } from './app.controller'
import { LeadModule } from './lead/lead.module'
import ENV_CONFIG from '~/config/configuration'
import { MONGO_DB_CONFIG } from '~/config/mongoose.config'
import { AuthModule } from '~/core/auth/auth.module'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'

@Module({
	imports: [
		I18nModule.forRoot({
			fallbackLanguage: 'en',
			parser: I18nJsonParser,
			parserOptions: {
				path: path.join(__dirname, '../i18n/')
			},
			resolvers: [
				{ use: QueryResolver, options: ['lang', 'locale', 'l'] },
				new HeaderResolver(['x-custom-lang']),
				AcceptLanguageResolver,
				new CookieResolver(['lang', 'locale', 'l'])
			]
		}),
		ConfigModule.forRoot({
			envFilePath: ['.development.env', '.production.env', '.env'],
			load: [ENV_CONFIG],
			isGlobal: true
		}),
		MongooseModule.forRoot(MONGO_DB_CONFIG.url, {
			useNewUrlParser: true,
			useCreateIndex: true
		}),
		LoggerModule,
		AuthModule,
		UserModule,
		LeadModule
	],
	controllers: [AppController]
})
export class AppModule {}
