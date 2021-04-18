import { IResponse, IUser } from '@jetpack/interfaces'

import api from './api'

export async function isTokenValid(token: string): Promise<boolean> {
	const { data } = await api.post('/auth/verifytoken', {
		token
	})

	return data.data as boolean
}

export async function login(email: string, password: string): Promise<string> {
	const result: IResponse<void> = await api.post('/auth/login', {
		email,
		password
	})

	return result.token as string
}

export async function register(user: IUser): Promise<boolean> {
	const result: IResponse<void> = await api.post('/auth/login', user)
	return result.status === 201
}
