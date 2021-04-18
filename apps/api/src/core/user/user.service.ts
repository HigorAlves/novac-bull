import { IUserPosition } from '@jetpack/interfaces'
import { forwardRef, Inject, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import * as Cryptojs from 'crypto-js'

import { CRYPTO_PASS } from '~/constants'
import { StockRepository } from '~/core/stocks/stock.repository'
import { UserRepository } from '~/core/user/user.repository'
import { WalletRepository } from '~/core/wallet/wallet.repository'
import { MyLogger } from '~/interceptors/logger.interceptor'
import { IUser } from '~/interfaces/user'
import { UserDocument } from '~/schemas/user.schema'

@Injectable()
export class UserService {
	constructor(
		private userRepository: UserRepository,
		private logger: MyLogger,
		private wallet: WalletRepository,
		private stocks: StockRepository
	) {
		this.logger.setContext('UserService')
	}

	async getByEmail(email: string): Promise<IResponse<UserDocument>> {
		this.logger.log('Getting user info by email')
		const user = await this.userRepository.get(email)

		return {
			error: false,
			message: 'Data from user',
			status: 200,
			data: user
		}
	}

	async getByID(id: string) {
		this.logger.log('Getting user info by ID')
		const user = await this.userRepository.getByID(id)

		return {
			error: false,
			message: 'Data from user',
			status: 200,
			data: user
		}
	}

	async findAll(): Promise<IResponse<IUser[]>> {
		this.logger.log('Getting a list of users')
		const users = await this.userRepository.getAll()

		return {
			error: false,
			message: 'List of all users',
			status: 200,
			data: users
		}
	}

	async create(data: IUser): Promise<IResponse<UserDocument>> {
		const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/
		const cpfIsValid = data.cpf.match(cpfRegex)
		data.cpf = Cryptojs.AES.encrypt(data.cpf, CRYPTO_PASS).toString()

		if (cpfIsValid) {
			const saltOrRounds = 10
			data.password = bcrypt.hashSync(data.password, saltOrRounds)
			const user = await this.userRepository.createUser(data)

			this.logger.log('New user created', { user: data.email })

			return {
				status: 201,
				message: 'User created successfully',
				error: false,
				data: user
			}
		}
		this.logger.log('User cannot be create because CPF is not valid', {
			user: data.email
		})
		return {
			status: 412,
			message: 'User cannot be create because CPF is not valid',
			error: true
		}
	}

	async delete(id: string): Promise<IResponse<boolean>> {
		await this.userRepository.deleteUser(id)
		this.logger.log('Removing an user', { userId: id })

		return {
			status: 200,
			error: false,
			message: 'User has been removed'
		}
	}

	async update(id: string, user: IUser) {
		this.logger.log('Updated user data', { user: user.email })
		delete user.email
		return this.userRepository.updateUser(user, id)
	}

	async updatePassword(email: string, password: string): Promise<UserDocument> {
		this.logger.log('Updated user password', { user: email })
		const passwordHash = bcrypt.hashSync(password, 10)
		return this.userRepository.updatePassword(email, passwordHash)
	}

	async position(email: string): Promise<IResponse<IUserPosition | void>> {
		const user = await this.userRepository.get(email)
		const wallets = await this.wallet.getWallets(user.id)
		const stock = await this.stocks.getStockList(user.id)
		const wallet = wallets[0]
		let stockPrice = 0

		stock.forEach(item => (stockPrice += item.buyPrice))

		const data: IUserPosition = {
			checkingAccountAmount: wallet.amount,
			consolidated: wallet.amount + stockPrice,
			positions: stock
		}

		return {
			message: 'Your folio',
			status: 200,
			error: false,
			data
		}
	}
}
