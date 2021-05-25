import { api } from '~/utils/fetcher'

type LoginResponse = {
	message: string
	token: string
}

export async function login({ email, password }: any): Promise<LoginResponse> {
	const { data } = await api.post('/auth/login', { email, password })
	return data
}

export async function registerUser(userData: any): Promise<any> {
	const { data } = await api.post('/auth/register', userData)
	return data
}

export async function verifyToken(
	token: string
): Promise<{ isValid: boolean }> {
	const { data } = await api.post('/auth/verifytoken', { token: token })
	return data
}
