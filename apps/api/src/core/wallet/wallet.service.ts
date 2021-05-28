import { IResponse, ITransaction, IWallet } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { HTTP_CODE } from '~/constants/httpCode'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { Logger } from '~/interceptors/logger.interceptor'
import { WalletDocument } from '~/schemas/wallet.schema'

@Injectable()
export class WalletService {
	constructor(
		private readonly Database: WalletRepository,
		private readonly logger: Logger
	) {}

	async getOne(wallet: string): Promise<IResponse<WalletDocument>> {
		const data = await this.Database.findOne(wallet)

		return {
			status: 200,
			data: data as WalletDocument,
			error: false,
			message: 'Here is your wallet'
		}
	}

	async getAllFromUser(user: string): Promise<IResponse<WalletDocument[]>> {
		const data = await this.Database.findAll(user)

		return {
			status: 200,
			data: data as WalletDocument[],
			error: false,
			message: 'Here is your wallet'
		}
	}

	async create(
		id: string,
		wallet: Omit<IWallet, 'transactions' | 'owner'>
	): Promise<IResponse> {
		try {
			const data: IWallet = {
				...wallet,
				owner: id,
				transactions: null
			}

			await this.Database.create(data)
			return {
				error: false,
				status: HTTP_CODE.Created,
				message: 'Wallet created'
			}
		} catch (e) {
			this.logger.error('Something went wront when creating wallet for user', {
				user: id,
				message: e.message
			})

			return {
				status: HTTP_CODE.BadRequest,
				error: true,
				message: e.message
			}
		}
	}

	async createTransaction(
		wallet: string,
		transaction: ITransaction
	): Promise<IResponse<WalletDocument>> {
		try {
			const result = await this.Database.pushTransaction(wallet, transaction)
			return {
				status: 201,
				message: 'New transaction created',
				error: false,
				data: result as WalletDocument
			}
		} catch (e) {
			this.logger.error(
				'Something went wrong when creating wallet transaction',
				{
					message: e.message
				}
			)

			return {
				status: HTTP_CODE.BadRequest,
				error: true,
				message: e.message
			}
		}
	}
}
