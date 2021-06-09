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
		const userExists = await this.user.checkUserExists(data.email)

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
				} catch (e) {
					this.logger.log(`Cannot send welcome email for ${data.email}`)
				}

				this.logger.log('A new user inside our DB 🎉🎉')

				return {
					error: false,
					message: 'User has been created',
					status: 201
				}
			}

			return {
				status: user.status,
				message: user.message,
				error: true
			}
		}

		this.logger.log('Something went wrong and we cannot create the user', {
			user: data.email
		})
		return {
			status: 409,
			message: 'This user cannot be created. Its already in use!',
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
		const user = await this.user.checkUserExists(data.email)
		const isCodeValid = await this.repository.verifyRecoverToken(data.code)

		if (!user && !isCodeValid) {
			this.logger.error('Can`t set new password for user.', {
				user: data.email
			})
			return {
				error: true,
				message: 'Your code our email is not right',
				status: 406
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
				status: 204,
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
						status: 204,
						error: false,
						message: 'Your password has been updated'
					}
				}

				this.logger.warn('Password has not been updated', { user: data.email })
				return {
					status: 409,
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
		try {
			await this.jwtService.verifyAsync(token)
			return {
				error: false,
				status: 200,
				data: true,
				message: 'Token is valid'
			}
		} catch (error) {
			return {
				error: false,
				status: 200,
				data: false,
				message: 'Token is not valid'
			}
		}
	}
}
