import { Body, Controller, Post, Res, UseInterceptors } from '@nestjs/common'
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { LoginDTO, RegisterUserDTO } from './dto'
import { HTTP_CODE } from '~/constants/httpCode'
import { AuthService } from '~/core/auth/auth.service'
import { VerifyTokenDTO } from '~/core/auth/dto/verifyToken.dto'
import { SentryInterceptor } from '~/interceptors/sentry.interceptor'

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

	@ApiOkResponse({ description: 'Your Token is valid' })
	@ApiResponse({
		status: HTTP_CODE.BadRequest,
		description: 'Token is invalid'
	})
	@Post('token')
	async verifyToken(
		@Body() { token }: VerifyTokenDTO,
		@Res() response: Response
	): Promise<Response> {
		const result = await this.authService.isTokenValid(token)
		return response.status(result.status).send(result)
	}
}
