import { MongooseModule } from '@nestjs/mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongodb: MongoMemoryServer

export const rootMongooseTestModule = () =>
	MongooseModule.forRootAsync({
		useFactory: async () => {
			mongodb = new MongoMemoryServer()
			const uri = await mongodb.getUri()
			return {
				uri,
				useCreateIndex: true,
				useNewUrlParser: true
			}
		}
	})

export const closeInMongodbConnection = async () => {
	if (mongodb) {
		await mongoose.connection.dropDatabase()
		await mongoose.connection.close()
		await mongodb.stop()
	}
}
