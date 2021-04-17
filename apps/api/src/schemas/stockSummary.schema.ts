import { IStockSummary } from '@jetpack/interfaces'
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type StockSummaryDocument = IStockSummary & Document

@Schema({ timestamps: true })
export class StockSummary {
	@Prop()
	owner: string

	@Prop(
		raw([
			{
				symbol: { type: String },
				buyPrice: { type: Number },
				createdAt: { type: Date }
			}
		])
	)
	stock: Array<Record<string, string>>
}

export const StockSummarySchema = SchemaFactory.createForClass(StockSummary)
