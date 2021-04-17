import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'

import { CreateTransactionDto } from '~/core/wallet/dto/createTransaction.dto'
import { WalletService } from '~/core/wallet/wallet.service'
import { Roles } from '~/decorators/roles.decorator'
import { JwtAuthGuard, RolesGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
import { jwtPayload } from '~/types/jwtPayload'
import { Role } from '~/types/role.enum'

@ApiTags('Wallet')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(SentryInterceptor)
@Controller('wallet')
export class WalletController {
	constructor(private service: WalletService) {}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Get('/')
	async getAllWallets(@Req() req: Request, @Res() response: Response) {
		const user = req.user as jwtPayload
		const { status, data } = await this.service.getWallets(user.email)
		response.status(status).send(data)
	}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Post()
	async createWallet(@Req() req: Request, @Res() response: Response) {
		const user = req.user as jwtPayload
		const result = await this.service.createWallet(user.email)
		response.status(result.status).send(result)
	}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Post('transaction')
	async registerTransaction(
		@Body() transaction: CreateTransactionDto,
		@Res() response: Response
	) {
		const result = await this.service.registerTransaction(
			transaction.walletId,
			transaction
		)
		response.status(result.status).send(result)
	}
}
