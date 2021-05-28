import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'

import { CreateWalletDTO } from '~/core/wallet/dto/create.dto'
import { CreateTransactionDto } from '~/core/wallet/dto/createTransaction.dto'
import { WalletService } from '~/core/wallet/wallet.service'
import { JwtAuthGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
import { jwtPayload } from '~/types/jwtPayload'

@ApiTags('Wallet')
@UseInterceptors(SentryInterceptor)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('wallet')
export class WalletController {
	constructor(private readonly service: WalletService) {}

	@Get(':id')
	async getOne(@Param() params, @Res() res: Response) {
		const { id } = params
		const response = await this.service.getOne(id)
		return res.status(response.status).send(response)
	}

	@Get()
	async getAllWallets(@Req() req: Request, @Res() res: Response) {
		const { id } = req.user as jwtPayload
		const response = await this.service.getAllFromUser(id)
		return res.status(response.status).send(response)
	}

	@Post()
	async createWallet(
		@Body() data: CreateWalletDTO,
		@Req() req: Request,
		@Res() res: Response
	) {
		const { id } = req.user as jwtPayload
		const response = await this.service.create(id, data)
		return res.status(response.status).send(response)
	}

	@Post('/transaction')
	async newTransaction(
		@Body() data: CreateTransactionDto,
		@Req() req: Request,
		@Res() res: Response
	) {
		const { wallet } = data
		delete data.wallet
		const response = await this.service.createTransaction(wallet, data)
		return res.status(response.status).send(response)
	}
}
