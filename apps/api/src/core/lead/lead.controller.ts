import { Body, Controller, Post } from '@nestjs/common'
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { HTTP_CODE } from '~/constants/httpCode'
import { LeadService } from '~/core/lead/lead.service'

@ApiTags('Lead')
@Controller('lead')
export class LeadController {
	constructor(private readonly service: LeadService) {}

	@ApiOkResponse({ description: 'Lead has been registrated' })
	@ApiResponse({
		status: HTTP_CODE.BadRequest,
		description: 'Cannot register inside DB the lead mail'
	})
	@Post()
	async registerEmail(
		@Body() { email }: Record<'email', string>,
		res: Response
	): Promise<Response> {
		const response = await this.service.registerNewLead(email)
		return res.status(response.status).send(response)
	}
}
