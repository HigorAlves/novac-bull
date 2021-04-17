import { IOrder } from '@jetpack/interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

import { ErrorMessages } from '~/constants/dtoMessages'

export class OrderDTO implements IOrder {
	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsNumber({ maxDecimalPlaces: 0 })
	amount: number

	@ApiProperty()
	@IsNotEmpty({ message: ErrorMessages.isEmpty })
	@IsString({ message: ErrorMessages.isString })
	symbol: string
}
