import { IJWT } from '@jetpack/interfaces'
import {
	Body,
	Controller,
	Post,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOkResponse,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { Request, Response } from 'express'

import { HTTP_CODE } from '~/constants/httpCode'
import { CategoryService } from '~/core/category/category.service'
import { CreateCategoryDTO } from '~/core/category/dto/create.dto'
import { JwtAuthGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'

@ApiTags('Category')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseInterceptors(SentryInterceptor)
@Controller('category')
export class CategoryController {
	constructor(private readonly service: CategoryService) {}

	@ApiOkResponse({ description: 'New category has been registred' })
	@ApiResponse({
		status: HTTP_CODE.BadRequest,
		description: 'Cannot register the new category'
	})
	@Post()
	async newCategory(
		@Body() data: CreateCategoryDTO,
		@Req() req: Request,
		@Res() res: Response
	): Promise<Response> {
		const { id } = req.user as IJWT
		const response = await this.service.create(id, data)
		return res.status(response.status).send(response)
	}
}
