import { IWallet } from '@jetpack/interfaces'
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type WalletDocument = IWallet & Document

@Schema({ timestamps: true })
export class Wallet {
	@Prop()
	name: string

	@Prop()
	description: string

	@Prop()
	owner: string

	@Prop()
	amount: number

	@Prop()
	isDefault: boolean

	@Prop()
	initialAmount: number

	@Prop(
		raw([
			{
				amount: { type: Number },
				category: { type: Object },
				createdAt: { type: Date },
				updatedAt: { type: Date }
			}
		])
	)
	transactions: Array<Record<string, string>> | null
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)
