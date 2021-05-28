import { ICategory, ITransaction } from '@jetpack/interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator'

import { ErrorMessages } from '~/constants/dtoMessages'

export class CreateTransactionDto implements ITransaction {
	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	wallet: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsNumber()
	amount: string

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsObject()
	category: ICategory
}
