import {
	Controller,
	Get,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { StocksService } from './stocks.service'
import { Roles } from '~/decorators/roles.decorator'
import { JwtAuthGuard, RolesGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
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
}
