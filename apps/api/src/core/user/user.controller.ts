import {
	Body,
	Controller,
	Logger,
	Put,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'

import { UpdateUserDto } from './dto'
import { UserService } from '~/core/user/user.service'
import { Roles } from '~/decorators/roles.decorator'
import { JwtAuthGuard, RolesGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
import { jwtPayload } from '~/types/jwtPayload'
import { Role } from '~/types/role.enum'

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(SentryInterceptor)
@Controller('user')
export class UserController {
	private logger: Logger = new Logger('USER_CONTROLLER')

	constructor(private userService: UserService) {}

	@Roles(Role.CLIENT, Role.ADMIN)
	@Put()
	async update(
		@Body() user: UpdateUserDto,
		@Req() req: Request,
		@Res() response: Response
	) {
		const { id } = req.user as jwtPayload
		this.logger.log('Updatind a user data')
		const result = await this.userService.update(id, user)
		return response.status(result.status).send(result)
	}
}
