import { IJWT } from '@jetpack/interfaces'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { AuthService } from '../auth.service'
import { JWT } from '~/constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: JWT.secret
		})
	}

	async validate(payload: IJWT) {
		const exists = await this.authService.userExists(payload.email)

		if (exists) {
			return { ...payload }
		} else {
			throw new UnauthorizedException()
		}
	}
}
