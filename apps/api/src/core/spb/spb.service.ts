import { ISPBTransaction, ITransaction } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'
import * as CryptoJS from 'crypto-js'

import { CRYPTO_PASS } from '~/constants'
import { UserRepository } from '~/core/user/user.repository'
import { WalletService } from '~/core/wallet/wallet.service'
import { MyLogger } from '~/interceptors/logger.interceptor'

@Injectable()
export class SpbService {
	constructor(
		private logger: MyLogger,
		private wallet: WalletService,
		private user: UserRepository
	) {
		this.logger.setContext('SPB_SERVICE')
	}

	async doTransaction(data: ISPBTransaction): Promise<IResponse<void>> {
		this.logger.log('A new transaction has entered')

		if (!(data.event === 'TRANSFER'))
			return {
				error: false,
				message: 'The event needs to be a TRANSFER',
				status: 400
			}

		const user = await this.user.getByID(data.target.account)
		const CPF = CryptoJS.AES.decrypt(user.cpf, CRYPTO_PASS).toString(
			CryptoJS.enc.Utf8
		)
		const areCPFequals = CPF === data.origin.cpf

		if (areCPFequals) {
			const walletsResult = await this.wallet.getWallets(user.email)
			const defaultWallet = walletsResult.data[0]
			const transaction: ITransaction = {
				createdAt: new Date(),
				amount: data.amount,
				category: 'TRANSFER',
				updatedAt: new Date()
			}

			const result = await this.wallet.registerTransaction(
				defaultWallet.id,
				transaction
			)

			return {
				status: result.status,
				message: result.message,
				error: false
			}
		}

		return {
			error: true,
			message: 'User bank account cpf needs to be equals to users CPF',
			status: 400
		}
	}
}
