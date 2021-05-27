import {
	Body,
	Controller,
	Post,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'

import { CreateWalletDTO } from '~/core/wallet/dto/create.dto'
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

	@Post()
	async createWallet(
		@Body() data: CreateWalletDTO,
		@Req() req: Request,
		@Res() res: Response
	) {
		const { id } = req.user as jwtPayload
		const response = await this.service.createNew(id, data)
		return res.status(response.status).send(response)
	}
}
