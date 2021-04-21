import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { SpbModule } from './spb/spb.module'
import { StocksModule } from './stocks/stocks.module'
import { WalletModule } from './wallet/wallet.module'
import ENV_CONFIG from '~/config/configuration'
import { MONGO_DB_CONFIG } from '~/config/mongoose.config'
import { AuthModule } from '~/core/auth/auth.module'
import { UserModule } from '~/core/user/user.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'

@Module({
	imports: [
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
		StocksModule,
		WalletModule,
		SpbModule
	],
	controllers: [AppController]
})
export class AppModule {}
