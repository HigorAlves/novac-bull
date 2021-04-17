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

import { StocksService } from './stocks.service'
import { OrderDTO } from '~/core/stocks/dto/order'
import { Roles } from '~/decorators/roles.decorator'
import { JwtAuthGuard, RolesGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
import { jwtPayload } from '~/types/jwtPayload'
import { Role } from '~/types/role.enum'

@ApiTags('Stocks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(SentryInterceptor)
@Controller('stocks')
export class StocksController {
	constructor(private service: StocksService) {}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Get('/trends')
	async findOne(@Res() res: Response) {
		const response = await this.service.getMostActiveStocks()
		return res.status(response.status).send(response)
	}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Post('/order')
	async order(
		@Body() data: OrderDTO,
		@Res() res: Response,
		@Req() req: Request
	) {
		const { email } = req.user as jwtPayload
		const response = await this.service.buyStocks(data, email)
		return res.status(response.status).send(response)
	}
}
