import { Injectable, Logger as NestLogger, Module, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends NestLogger {
	constructor() {
		super()
	}

	log(message: string, metadata?: unknown) {
	}

	warn(message: string, metadata?: unknown) {
	}

	error(message: string, metadata?: unknown) {
	}

	debug(message: string, metadata?: unknown) {
	}

	verbose(message: string, metadata?: unknown) {
	}
}

@Module({
	providers: [Logger],
	exports: [Logger]
})
export class LoggerModule {}
