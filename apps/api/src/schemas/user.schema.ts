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
			name: { type: String },
			icon: { type: String },
			backgroundColor: { type: String },
			type: { type: String }
		})
	)
	categories: Record<string, string>
}

export const UserSchema = SchemaFactory.createForClass(User)
