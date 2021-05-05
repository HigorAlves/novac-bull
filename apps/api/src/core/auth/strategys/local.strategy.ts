import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import { AuthService } from '~/core/auth/auth.service'
import { UserService } from '~/core/user/user.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService, private user: UserService) {
		super()
	}

	async validate(username: string): Promise<any> {
		const user = await this.user.checkExists(username)
		if (!user) {
			throw new UnauthorizedException()
		}
		return user
	}
}
