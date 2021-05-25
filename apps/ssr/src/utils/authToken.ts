import Cookie from 'js-cookie'
import ServerCookie from 'next-cookies'
import Router from 'next/router'

export const TOKEN_STORAGE_KEY = 'token'

export class AuthToken {
	static async storeToken(token: string) {
		Cookie.set(TOKEN_STORAGE_KEY, token)
		await Router.push('/dashboard')
	}

	static getToken(): string {
		return Cookie.get(TOKEN_STORAGE_KEY)
	}

	static getOnServer(ctx): string {
		return ServerCookie(ctx)[TOKEN_STORAGE_KEY]
	}
}
