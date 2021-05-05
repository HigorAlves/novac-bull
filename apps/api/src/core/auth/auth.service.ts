import {
	IUser,
	ILogin,
	INewPassword,
	IUpdatePassword
} from '@jetpack/interfaces'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { I18nRequestScopeService } from 'nestjs-i18n'

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
		private logger: Logger,
		private readonly i18n: I18nRequestScopeService
	) {
		this.logger.setContext('AUTH_SERVICE')
	}

	async login(login: ILogin): Promise<IResponse> {
		const isValid = await this.user.checkExists(login.email)
		let message: string

		if (isValid) {
			const { data } = await this.user.getByEmail(login.email)
			const payload = { email: data.email, roles: [data.role] }
			this.logger.log('User has logged in', { user: data.email })
			message = await this.i18n.translate('auth.SUCCESS_MESSAGE')

			return {
				message,
				status: HTTP_CODE.OK,
				token: this.jwt.sign(payload),
				error: false
			}
		}

		this.logger.log('User cannot logged email or password wrong', {
			user: login.email
		})

		message = await this.i18n.translate('auth.WRONG_DATA')
		return {
			message,
			status: HTTP_CODE.Unauthorized,
			error: true
		}
	}

	async register(data: IUser): Promise<IResponse> {
		const userExists = await this.user.checkExists(data.email)
		let message: string

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
				message = await this.i18n.t('auth.REGISTERED')

				return {
					message,
					error: false,
					status: 201
				}
			}

			this.logger.log('Something went wrong while trying to register', {
				user: data.email
			})
			message = await this.i18n.t('auth.REGISTERED_ERROR')
			return {
				message,
				status: HTTP_CODE.BadRequest,
				error: true
			}
		}

		message = await this.i18n.t('auth.REGISTERED_CONFLICT')
		this.logger.log('Something went wrong and we cannot create the user', {
			user: data.email
		})
		return {
			message,
			status: HTTP_CODE.Conflict,
			error: true
		}
	}

	async recoveryPassword(email: string): Promise<IResponse<string>> {
		const alreadyHaveActiveCode = await this.repository.alreadyGenerated(email)

		if (!alreadyHaveActiveCode) {
			const code = await this.repository.createRecoveryCode(email)

			this.logger.warn('User created a recovery password code', { user: email })
			return {
				error: false,
				message: 'Recovery code created successfully.',
				status: 201,
				data: code as string
			}
		}

		this.logger.warn('There is alredy a code for this email', { user: email })
		return {
			status: 409,
			error: true,
			message: 'There is already a code generated for this email.'
		}
	}

	async newPassword(data: INewPassword): Promise<IResponse> {
		const user = await this.user.checkExists(data.email)
		const isCodeValid = await this.repository.verifyRecoverToken(data.code)

		if (!user && !isCodeValid) {
			this.logger.error('The user or code is invalid!', {
				user: data.email
			})
			return {
				error: true,
				message: 'Your code our email is not right',
				status: HTTP_CODE.NotAcceptable
			}
		}

		const { password } = await this.user.updatePassword(
			data.email,
			data.password
		)

		if (password) {
			await this.repository.deleteRecoverToken(data.code)

			this.logger.log('User has updated the password', { user: data.email })
			return {
				status: HTTP_CODE.NoContent,
				error: false,
				message: 'Your password has been changed'
			}
		}
	}

	async updatePassword(user: IUpdatePassword): Promise<IResponse> {
		try {
			const { data } = await this.user.getByEmail(user.email)
			const isPasswordEqual = bcrypt.compareSync(
				user.oldPassword,
				data.password
			)

			if (isPasswordEqual) {
				const password = await bcrypt.hashSync(user.newPassword, 10)
				const hasChange = await this.user.updatePassword(data.email, password)

				if (hasChange) {
					this.logger.log('Password has been updated', { user: data.email })
					return {
						status: HTTP_CODE.NoContent,
						error: false,
						message: 'Your password has been updated'
					}
				}

				this.logger.warn('Password has not been updated', { user: data.email })
				return {
					status: HTTP_CODE.Conflict,
					error: true,
					message: 'We cant update this password'
				}
			}
		} catch (error) {
			this.logger.error(
				'Something goes wrong while someone tries to update password',
				{ error }
			)
			return { error: error, message: 'Something goes wrong', status: 500 }
		}
	}

	async validateToken(token: string): Promise<IResponse<boolean>> {
		let message: string
		this.logger.log('Trying to validate token')

		try {
			await this.jwt.verifyAsync(token)
			message = await this.i18n.t('auth.VALID_TOKEN')
			this.logger.log('This token has been validated with success')
			return {
				error: false,
				status: HTTP_CODE.OK,
				data: true,
				message
			}
		} catch (error) {
			this.logger.log('This token is not valid')
			message = await this.i18n.t('auth.INVALID_TOKEN')
			return {
				error: false,
				status: HTTP_CODE.BadRequest,
				data: false,
				message
			}
		}
	}
}
