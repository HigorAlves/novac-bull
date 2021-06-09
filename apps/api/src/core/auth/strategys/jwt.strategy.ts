import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { AuthService } from '../auth.service'
import { JWT } from '~/constants'
import { UserService } from '~/core/user/user.service'
import { jwtPayload } from '~/types/jwtPayload'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService, private user: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: JWT.secret
		})
	}

	async validate(payload: jwtPayload) {
		const exists = await this.user.checkUserExists(payload.email)

		if (exists) {
			return { ...payload }
		} else {
			throw new UnauthorizedException()
		}
	}
}
