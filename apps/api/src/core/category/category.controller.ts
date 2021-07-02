import { IJWT } from '@jetpack/interfaces'
import {
	Body,
	Controller,
	Get,
	Post,
	Put,
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
import { UpdateCategoryDTO } from '~/core/category/dto/update.dto'
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

	@ApiOkResponse({ description: 'List of all categories' })
	@ApiResponse({
		status: HTTP_CODE.BadRequest,
		description: 'Cannot get list of all categories'
	})
	@Get()
	async list(@Req() req: Request, @Res() res: Response): Promise<Response> {
		const { id } = req.user as IJWT
		const response = await this.service.getAll(id)
		return res.status(response.status).send(response)
	}

	@ApiOkResponse({ description: 'Item has been updated' })
	@ApiResponse({
		status: HTTP_CODE.BadRequest,
		description: 'Cannot updated'
	})
	@Put()
	async update(
		@Body() data: UpdateCategoryDTO,
		@Req() req: Request,
		@Res() res: Response
	): Promise<Response> {
		const { id } = req.user as IJWT
		const response = await this.service.update(id, data)
		return res.status(response.status).send(response)
	}
}
