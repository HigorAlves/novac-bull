import { Module } from '@nestjs/common'

import { SpbController } from './spb.controller'
import { SpbService } from './spb.service'
import { UserModule } from '~/core/user/user.module'
import { WalletModule } from '~/core/wallet/wallet.module'
import { LoggerModule } from '~/interceptors/logger.interceptor'

@Module({
	imports: [LoggerModule, WalletModule, UserModule],
	controllers: [SpbController],
	providers: [SpbService]
})
export class SpbModule {}
