import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { LeadDocument } from '~/schemas/lead.schema'

@Injectable()
export class LeadRepository {
	private logger = new Logger('LEAD_REPOSITORY')

	constructor(@InjectModel('Lead') private Database: Model<LeadDocument>) {}

	async create(email: string): Promise<boolean | string> {
		const result = new this.Database({ email })

		try {
			await result.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
