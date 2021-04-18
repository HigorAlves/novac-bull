import { RootState } from '../rootReducer'

export function getID(state: RootState): string | null {
	return state.authentication.token
}

export function isLoading(state: RootState): boolean | null {
	return state.authentication.loading
}
