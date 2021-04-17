import { IUser } from '@jetpack/interfaces'
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = IUser & Document

@Schema({ timestamps: true })
export class User {
	@Prop()
	firstName: string

	@Prop()
	lastName: string

	@Prop()
	image: string

	@Prop()
	email: string

	@Prop()
	cpf: string

	@Prop(
		raw({
			currency: { type: String },
			language: { type: String }
		})
	)
	locale: Record<string, string>

	@Prop()
	role: 'admin' | 'client'

	@Prop()
	password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
