import { IWallet } from '@jetpack/interfaces'
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type WalletDocument = IWallet & Document

@Schema({ timestamps: true })
export class Wallet {
	@Prop()
	owner: string

	@Prop()
	amount: number

	@Prop(
		raw([
			{
				amount: { type: Number },
				category: { type: String },
				createdAt: { type: Date },
				updatedAt: { type: Date }
			}
		])
	)
	transactions: Array<Record<string, string>>
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)
