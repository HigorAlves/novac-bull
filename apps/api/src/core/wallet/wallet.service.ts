import { IResponse, IWallet } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { HTTP_CODE } from '~/constants/httpCode'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { Logger } from '~/interceptors/logger.interceptor'

@Injectable()
export class WalletService {
	constructor(
		private readonly Database: WalletRepository,
		private readonly logger: Logger
	) {}

	async createNew(
		id: string,
		wallet: Omit<IWallet, 'transactions'>
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
}
