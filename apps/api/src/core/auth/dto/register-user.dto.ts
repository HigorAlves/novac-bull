import { IUser } from '@jetpack/interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

import { ErrorMessages } from '~/constants/dtoMessages'

export class RegisterUserDTO implements IUser {
	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	email: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	password: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	name: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	cpf: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	image: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	locale: { currency: 'BRL' | 'USD'; language: 'pt-BR' | 'en-US' }

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	role: 'client' | 'admin'
}
