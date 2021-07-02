import { IUser } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { UserRepository } from '~/core/user/user.repository'
import { Logger } from '~/interceptors/logger.interceptor'
import { UserDocument } from '~/schemas/user.schema'

@Injectable()
export class UserService {
	constructor(private repository: UserRepository, private logger: Logger) {
		this.logger.setContext('USER_SERVICE')
	}

	async checkExists(email: string): Promise<boolean> {
		this.logger.log('Checking if the users exists inside database')
		const result = await this.getByEmail(email)
		return !!result.data
	}

	async getByEmail(email: string): Promise<IResponse<UserDocument>> {
		this.logger.log('Getting user info by email')
		const user = await this.repository.get(email)

		return {
			error: false,
			message: 'Data from user',
			status: 200,
			data: user
		}
	}

	async getByID(id: string) {
		this.logger.log('Getting user info by ID')
		const user = await this.repository.getByID(id)

		return {
			error: false,
			message: 'Data from user',
			status: 200,
			data: user
		}
	}

	async findAll(): Promise<IResponse<IUser[]>> {
		this.logger.log('Getting a list of users')
		const users = await this.repository.getAll()

		return {
			error: false,
			message: 'List of all users',
			status: 200,
			data: users
		}
	}

	async create(data: IUser): Promise<IResponse<UserDocument>> {
		const saltOrRounds = 10
		data.password = bcrypt.hashSync(data.password, saltOrRounds)
		const user = await this.repository.createUser(data)

		this.logger.log('New user created', { user: data.email })

		return {
			status: 201,
			message: 'User created successfully',
			error: false,
			data: user
		}
	}

	async delete(id: string): Promise<IResponse<boolean>> {
		await this.repository.deleteUser(id)
		this.logger.log('Removing an user', { userId: id })

		return {
			status: 200,
			error: false,
			message: 'User has been removed'
		}
	}

	async update(
		id: string,
		user: Pick<IUser, 'name'> & Pick<IUser, 'email'>
	): Promise<IResponse> {
		this.logger.log('Updated user data', { user: user.email })
		delete user.email
		try {
			await this.repository.updateUser(user, id)
			return {
				error: false,
				message: 'Your data has been updated',
				status: 200
			}
		} catch (e) {
			return {
				error: true,
				message: e.message,
				status: 500
			}
		}
	}

	async updatePassword(email: string, password: string): Promise<UserDocument> {
		this.logger.log('Updated user password', { user: email })
		const passwordHash = bcrypt.hashSync(password, 10)
		return this.repository.updatePassword(email, passwordHash)
	}
}
