import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { LeadController } from './lead.controller'
import { LeadService } from './lead.service'
import { LeadRepository } from '~/core/lead/lead.repository'
import { LoggerModule } from '~/interceptors/logger.interceptor'
import { LeadSchema } from '~/schemas/lead.schema'

@Module({
	imports: [
		LoggerModule,
		MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }])
	],
	providers: [LeadService, LeadRepository],
	controllers: [LeadController]
})
export class LeadModule {}
