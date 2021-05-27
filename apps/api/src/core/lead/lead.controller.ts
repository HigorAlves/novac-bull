import { Body, Controller, Post } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { LeadService } from '~/core/lead/lead.service'

@ApiTags('Lead')
@Controller('lead')
export class LeadController {
	constructor(private readonly service: LeadService) {}

	@ApiOkResponse({ description: 'Lead has been registrated' })
	@Post()
	async registerEmail(
		@Body() { email }: Record<'email', string>,
		res: Response
	): Promise<Response> {
		const response = await this.service.registerNewLead(email)
		return res.status(response.status).send(response)
	}
}
