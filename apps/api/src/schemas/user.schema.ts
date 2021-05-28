import { IUser } from '@jetpack/interfaces'
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = IUser & Document

@Schema({ timestamps: true })
export class User {
	@Prop()
	name: string

	@Prop()
	image: string

	@Prop()
	email: string

	@Prop()
	role: 'admin' | 'client'

	@Prop()
	password: string

	@Prop(
		raw({
			currency: { type: String },
			language: { type: String }
		})
	)
	locale: Record<string, string>
}

export const UserSchema = SchemaFactory.createForClass(User)
