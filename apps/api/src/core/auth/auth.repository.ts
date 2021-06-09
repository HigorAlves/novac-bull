import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { RecoveryDocument } from '~/schemas/recovery.schema'

@Injectable()
export class AuthRepository {
	private logger = new Logger('AUTH_REPOSITORY')

	constructor(
		@InjectModel('Recovery') private RecoveryModel: Model<RecoveryDocument>
	) {}

	async deleteRecoverToken(code: string) {
		this.logger.log('Delete recover token')
		const token = await this.RecoveryModel.findOne({ code }).exec()
		return this.RecoveryModel.deleteOne({ id: token.id })
	}
}
