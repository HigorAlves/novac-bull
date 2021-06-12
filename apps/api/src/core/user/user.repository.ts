import { IUser } from '@jetpack/interfaces'
import {
	Injectable,
	InternalServerErrorException,
	Logger
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ObjectID } from 'mongodb'
import { Model } from 'mongoose'

import { UserDocument } from '~/schemas/user.schema'

@Injectable()
export class UserRepository {
	private logger = new Logger('USER_REPOSITORY')

	constructor(@InjectModel('User') private Database: Model<UserDocument>) {}

	async get(email: string): Promise<UserDocument> {
		return await this.Database.findOne({ email }).exec()
	}

	async getByID(uid: string): Promise<UserDocument> {
		return await this.Database.findById(uid).exec()
	}

	async getAll(): Promise<IUser[]> {
		return await this.Database.find().exec()
	}

	async createUser(createUserDTO: IUser): Promise<UserDocument> {
		const data: IUser = { ...createUserDTO, role: 'client' }

		const user = new this.Database(data)

		try {
			await user.save()
		} catch (error) {
			this.logger.error('Failed to create user data', error.stack)
			throw new InternalServerErrorException()
		}
		return user
	}

	async deleteUser(id: string): Promise<boolean> {
		const result = await this.Database.deleteOne({
			_id: new ObjectID(id)
		})

		return result.deletedCount != 0
	}

	async updateUser(
		user: Pick<IUser, 'name'> & Pick<IUser, 'email'>,
		id: string
	): Promise<UserDocument> {
		return await this.Database.findOneAndUpdate(
			{ id },
			{ email: user.email, name: user.name }
		).exec()
	}

	async updatePassword(email: string, password: string): Promise<UserDocument> {
		const user = await this.Database.findOne({ email }).exec()

		user.update({ password })
		return user
	}
}
