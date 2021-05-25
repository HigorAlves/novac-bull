import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LeadDocument = Document

@Schema()
export class Lead {
	@Prop()
	email: string

	@Prop({ type: Date, default: new Date() })
	createdAt: Date
}

export const LeadSchema = SchemaFactory.createForClass(Lead)
