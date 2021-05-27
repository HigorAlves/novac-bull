import {
	Body,
	Controller,
	Patch,
	Post,
	Req,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiOkResponse,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { Request, Response } from 'express'

import {
	LoginDTO,
	NewPasswordDTO,
	RegisterUserDTO,
	UpdatePasswordDTO
} from './dto'
import { HTTP_CODE } from '~/constants/httpCode'
import { AuthService } from '~/core/auth/auth.service'
import { VerifyTokenDTO } from '~/core/auth/dto/verifyToken.dto'
import { JwtAuthGuard } from '~/guards'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'
import { jwtPayload } from '~/types/jwtPayload'

@ApiTags('Auth')
@UseInterceptors(SentryInterceptor)
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@ApiOkResponse({ description: 'Successfully logged in' })
	@ApiResponse({
		status: HTTP_CODE.Unauthorized,
		description: 'Email or password wrong'
	})
	@Post('login')
	async login(@Body() data: LoginDTO, @Res() res: Response): Promise<Response> {
		const response = await this.authService.login(data)
		return res.status(response.status).send(response)
	}

	@ApiResponse({
		status: HTTP_CODE.Created,
		description: 'User has been registered'
	})
	@ApiResponse({
		status: HTTP_CODE.Conflict,
		description: 'This user cannot be created. Its already in use!'
	})
	@Post('register')
	async register(
		@Body() user: RegisterUserDTO,
		@Res() res: Response
	): Promise<Response> {
		const response = await this.authService.register(user)
		return res.status(response.status).send(response)
	}

	@ApiResponse({
		status: 201,
		description: 'Recovery code created successfully'
	})
	@ApiResponse({
		status: 409,
		description: 'There is already a code generated for this email.'
	})
	@Post('password/recovery')
	async passwordRecovery(
		@Body('email') email: string,
		@Res() res: Response
	): Promise<Response> {
		const response = await this.authService.recoverPassword(email)
		return res.status(response.status).send(response)
	}

	@ApiResponse({
		status: 204,
		description: 'Your password has been changed'
	})
	@ApiResponse({
		status: 406,
		description: 'Your code our email is not right'
	})
	@Patch('password/new')
	async newPassword(
		@Body() data: NewPasswordDTO,
		@Res() res: Response
	): Promise<Response> {
		const response = await this.authService.newPassword(data)
		return res.status(response.status).send(response)
	}

	@ApiResponse({
		status: 204,
		description: 'Your password has been updated'
	})
	@ApiResponse({
		status: 409,
		description: 'We cant update this password'
	})
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	@Patch('password/update')
	async updatePassword(
		@Body() data: UpdatePasswordDTO,
		@Req() req: Request,
		@Res() res: Response
	) {
		const user = req.user as jwtPayload
		const userData = { ...user, ...data }
		const response = await this.authService.updatePassword(userData)
		return res.status(response.status).send(response)
	}

	@ApiCreatedResponse()
	@Post('verify/token')
	async verifyToken(
		@Body() { token }: VerifyTokenDTO,
		@Res() response: Response
	): Promise<Response> {
		const result = await this.authService.validateToken(token)
		return response.status(200).send(result)
	}
}
