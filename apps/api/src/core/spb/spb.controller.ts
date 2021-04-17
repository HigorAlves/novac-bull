import { Body, Controller, Post, Res, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { TransferDTO } from '~/core/spb/dto/eventDto'
import { SpbService } from '~/core/spb/spb.service'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'

@ApiTags('SPB')
@UseInterceptors(SentryInterceptor)
@Controller('spb')
export class SpbController {
	constructor(private service: SpbService) {}

	@Post('events')
	async findOne(@Body() data: TransferDTO, @Res() res: Response) {
		const response = await this.service.doTransaction(data)
		return res.status(response.status).send(response)
	}
}
