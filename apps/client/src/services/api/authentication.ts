import { IResponse } from '@jetpack/interfaces'

import { API_ROUTES } from '~/config/apiRoutes'
import { API } from '~/utils/fetcher'

export async function login(
	email: string,
	password: string
): Promise<string | boolean> {
	try {
		const { data, status } = await API.post<IResponse>(
			API_ROUTES.authentication.login,
			{
				email,
				password
			}
		)

		if (status === 200) {
			return data.token as string
		}

		return false
	} catch (e) {
		console.error(e)
		return false
	}
}

export async function register(
	email: string,
	password: string,
	name: string
): Promise<string | boolean> {
	try {
		const { status } = await API.post<IResponse>(
			API_ROUTES.authentication.registration,
			{
				email,
				password,
				name
			}
		)

		return status === 201
	} catch (e) {
		console.error(e)
		return false
	}
}

export async function verifyToken(token: string): Promise<string | boolean> {
	try {
		const { status } = await API.post<IResponse<boolean>>(
			API_ROUTES.authentication.validToken,
			{
				token
			}
		)

		return status === 200
	} catch (e) {
		console.error(e)
		return false
	}
}
