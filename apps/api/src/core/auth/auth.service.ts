import { ILogin, IUser } from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { AuthRepository } from './auth.repository'
import { HTTP_CODE } from '~/constants/httpCode'
import { UserService } from '~/core/user/user.service'
import { Logger } from '~/interceptors/logger.interceptor'
import { EmailTemplates, sendMail } from '~/lib/mail'

@Injectable()
export class AuthService {
	constructor(
		private repository: AuthRepository,
		private user: UserService,
		private jwt: JwtService,
		private logger: Logger
	) {
		this.logger.setContext('AUTH_SERVICE')
	}

	async isPasswordValid(user: ILogin): Promise<boolean> {
		const { data } = await this.user.getByEmail(user.email)

		if (data) {
			try {
				return bcrypt.compareSync(user.password, data.password)
			} catch (error) {
				this.logger.error(error)
				return false
			}
		}

		return false
	}

	async userExists(email: string): Promise<boolean> {
		const result = await this.user.getByEmail(email)
		return !!result.data
	}

	async login(login: ILogin): Promise<IResponse> {
		const isValid = await this.isPasswordValid(login)
		if (isValid) {
			const { data } = await this.user.getByEmail(login.email)
			const payload = { email: data.email, roles: [data.role], id: data.id }
			this.logger.log('User has logged in', { user: data.email })
			return {
				message: 'You are logged in successfuly',
				status: HTTP_CODE.OK,
				token: this.jwt.sign(payload),
				error: false
			}
		}

		this.logger.log('User cannot logged email or password wrong', {
			user: login.email
		})

		return {
			message: 'Something went wront with your login',
			status: HTTP_CODE.Unauthorized,
			error: true
		}
	}

	async register(data: IUser): Promise<IResponse> {
		const userExists = await this.user.checkExists(data.email)

		if (!userExists) {
			const user = await this.user.create(data)
			if (!user.error) {
				try {
					await sendMail({
						from: 'higorhaalves@gmail.com',
						to: data.email,
						subject: 'Bem vindo a nossa plataforma',
						dynamic_template_data: {
							name: data.name
						},
						templateId: EmailTemplates.WELCOME
					})
					this.logger.log(`A welcome email was send to ${data.email}`)
				} catch (e) {
					this.logger.log(`Cannot send welcome email for ${data.email}`)
				}

				this.logger.log('A new user inside our DB 🎉🎉', { user: data.email })

				return {
					message: 'You are now registrated to our system',
					error: false,
					status: 201
				}
			}

			this.logger.log('Something went wrong while trying to register', {
				user: data.email
			})

			return {
				message: 'Something went wrong with your registration process',
				status: HTTP_CODE.BadRequest,
				error: true
			}
		}

		this.logger.log('Something went wrong and we cannot create the user', {
			user: data.email
		})
		return {
			message: 'Something went wrong with your registration process',
			status: HTTP_CODE.Conflict,
			error: true
		}
	}

	async isTokenValid(token: string): Promise<IResponse<boolean>> {
		const message = 'todo'
		this.logger.log('Trying to validate token')

		try {
			await this.jwt.verifyAsync(token)

			this.logger.log('This token has been validated with success')
			return {
				error: false,
				status: HTTP_CODE.OK,
				data: true,
				message
			}
		} catch (error) {
			this.logger.log('This token is not valid')

			return {
				error: false,
				status: HTTP_CODE.BadRequest,
				data: false,
				message
			}
		}
	}
}
