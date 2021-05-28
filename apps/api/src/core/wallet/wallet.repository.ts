import { ITransaction, IWallet } from '@jetpack/interfaces'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { WalletDocument } from '~/schemas/wallet.schema'

@Injectable()
export class WalletRepository {
	private logger = new Logger('WALLET_REPOSITORY')

	constructor(@InjectModel('Wallet') private Database: Model<WalletDocument>) {}

	async create(data: IWallet): Promise<boolean | string> {
		const walletData = {
			...data,
			amount: 0
		}
		const wallet = new this.Database(walletData)

		try {
			await wallet.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async findOne(id: string): Promise<WalletDocument | boolean> {
		try {
			return await this.Database.findById(id).exec()
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async findAll(id: string): Promise<WalletDocument[] | boolean> {
		try {
			return await this.Database.find({ owner: id }).exec()
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async pushTransaction(
		walletId: string,
		transaction: ITransaction
	): Promise<WalletDocument | boolean> {
		try {
			const wallet = await this.Database.findById(walletId).exec()
			wallet.amount += parseFloat(transaction.amount)
			if (wallet.transactions !== null) {
				wallet.transactions.push(transaction)
			} else {
				wallet.transactions = [transaction]
			}

			return wallet.save()
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
