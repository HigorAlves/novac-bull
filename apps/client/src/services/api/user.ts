import { API } from '~/utils/fetcher'

export async function login(
  email: string,
  password: string
): Promise<string | boolean> {
  try {
    const { data, status } = await API.post('/session', {
      email,
      password
    })

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
  password: string
): Promise<string | boolean> {
  try {
    const { status } = await API.post('/register', {
      email,
      password
    })

    return status === 201
  } catch (e) {
    console.error(e)
    return false
  }
}
