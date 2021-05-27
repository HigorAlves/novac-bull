import { Injectable } from '@nestjs/common'

import { HTTP_CODE } from '~/constants/httpCode'
import { LeadRepository } from '~/core/lead/lead.repository'
import { Logger } from '~/interceptors/logger.interceptor'

@Injectable()
export class LeadService {
	constructor(private repository: LeadRepository, private logger: Logger) {
		this.logger.setContext('LEAD_SERVICE')
	}

	async registerNewLead(email: string): Promise<IResponse> {
		const result = await this.repository.create(email)
		if (result) {
			this.logger.log('New lead was registered')

			return {
				status: HTTP_CODE.Created,
				error: false,
				message: 'Lead has been registrated'
			}
		}

		return {
			status: HTTP_CODE.BadRequest,
			error: true,
			message: 'Something was wrong'
		}
	}
}
