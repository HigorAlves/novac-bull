import { ICategory, IResponse } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'

import { HTTP_CODE } from '~/constants/httpCode'
import { CategoryRepository } from '~/core/category/category.repository'
import { Logger } from '~/interceptors/logger.interceptor'

@Injectable()
export class CategoryService {
	constructor(
		private readonly repository: CategoryRepository,
		private readonly logger: Logger
	) {
		this.logger.setContext('CATEGORY_SERVICE')
	}

	async create(userId: string, category: ICategory): Promise<IResponse> {
		try {
			await this.repository.create(userId, category)
			return {
				error: false,
				message: 'New category added',
				status: 201
			}
		} catch (e) {
			this.logger.error(e)
			return {
				error: true,
				message: e.message,
				status: HTTP_CODE.BadRequest
			}
		}
	}
}
