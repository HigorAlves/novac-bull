import { ITransaction, IWallet } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { UserService } from '~/core/user/user.service'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { MyLogger } from '~/interceptors/logger.interceptor'

@Injectable()
export class WalletService {
	constructor(
		private repository: WalletRepository,
		private logger: MyLogger,
		private userService: UserService
	) {
		this.logger.setContext('WALLET_SERVICE')
	}

	async createWallet(email: string): Promise<IResponse<void>> {
		const user = await this.userService.getByEmail(email)
		const walletCreated = await this.repository.createWallet(user.data.id)
		if (walletCreated) {
			return {
				status: 201,
				message: 'New wallet was create',
				error: false
			}
		}
		return {
			status: 500,
			message: 'Something went wrong',
			error: true
		}
	}

	async getWallets(email: string): Promise<IResponse<IWallet[] | void>> {
		const userResult = await this.userService.getByEmail(email)
		if (!userResult.error) {
			const wallets = await this.repository.getWallets(userResult.data.id)
			return {
				error: false,
				message: 'List of all user wallets',
				status: 200,
				data: wallets
			}
		}
		return {
			error: true,
			message: 'This user not exists',
			status: 400
		}
	}

	async registerTransaction(
		wid: string,
		transaction: ITransaction
	): Promise<IResponse<IWallet | boolean>> {
		this.logger.log(`Adding a new register into wallet - ${wid}`)
		const hasWallet = await this.repository.verifyWalletExists(wid)

		if (hasWallet) {
			transaction.createdAt = new Date()
			const wallet = await this.repository.registerTransaction(wid, transaction)

			return {
				status: 201,
				error: true,
				message: 'Transaction was create with sucess',
				data: wallet
			}
		} else {
			return {
				status: 400,
				error: true,
				message: 'This wallet not exists'
			}
		}
	}
}
