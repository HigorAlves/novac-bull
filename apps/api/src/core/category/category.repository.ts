import { ICategory } from '@jetpack/interfaces'
import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { UserDocument } from '~/schemas/user.schema'

@Injectable()
export class CategoryRepository {
	private logger = new Logger('CATEGORY_REPOSITORY')

	constructor(@InjectModel('User') private Database: Model<UserDocument>) {}

	async create(userId: string, category: ICategory): Promise<boolean | string> {
		const user = await this.Database.findById(userId).exec()
		user.categories !== null
			? user.categories.push(category)
			: (user.categories = [category])

		try {
			await user.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async delete(userId: string, category: ICategory): Promise<boolean | string> {
		const user = await this.Database.findById(userId).exec()
		user.categories = user.categories.filter(
			(item: ICategory) => item.id !== category.id
		)
		try {
			await user.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async listAllCategories(userId: string): Promise<ICategory[] | boolean> {
		const user = await this.Database.findById(userId).exec()
		try {
			return user.categories
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}

	async update(userId: string, category: ICategory): Promise<boolean | string> {
		const user = await this.Database.findById(userId).exec()
		user.categories = user.categories.map((item: ICategory) =>
			item.id === category.id ? (item = category) : item
		)
		try {
			await user.save()
			return true
		} catch (e) {
			this.logger.error('ERROR: ', e)
			return false
		}
	}
}
