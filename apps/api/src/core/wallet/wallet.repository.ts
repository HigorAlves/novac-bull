import { IWallet } from '@jetpack/interfaces'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { WalletDocument } from '~/schemas/wallet.schema'

@Injectable()
export class WalletRepository {
	private logger = new Logger('WALLET_REPOSITORY')

	constructor(@InjectModel('Wallet') private Database: Model<WalletDocument>) {}

	async create(data: IWallet): Promise<boolean | string> {
		const wallet = new this.Database(data)

		try {
			await wallet.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
