import { ITransaction, IWallet } from '@jetpack/interfaces'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ObjectID } from 'mongodb'
import { Model } from 'mongoose'

import { WalletDocument } from '~/schemas/wallet.schema'

@Injectable()
export class WalletRepository {
	private logger = new Logger('WALLET_REPOSITORY')

	constructor(@InjectModel('Wallet') private Database: Model<WalletDocument>) {}

	async createWallet(uid: string): Promise<boolean> {
		const walletInfo: IWallet = {
			amount: 0,
			owner: uid,
			transactions: null
		}
		const wallet = new this.Database(walletInfo)

		try {
			await wallet.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async getWallets(uid: string): Promise<WalletDocument[]> {
		return await this.Database.find({ owner: uid }).exec()
	}

	async verifyWalletExists(wid: string): Promise<boolean> {
		try {
			const result = await this.Database.findById(wid).exec()

			return !!result
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async registerTransaction(
		wid: string,
		transaction: ITransaction
	): Promise<WalletDocument | boolean> {
		try {
			const wallet = await this.Database.findById(wid).exec()
			const currentAmount = wallet.amount + transaction.amount
			let transactions = wallet.transactions

			if (transactions === null) {
				transactions = [transaction]
			} else {
				transactions.push(transaction)
			}

			return await wallet.updateOne({ amount: currentAmount, transactions })
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
