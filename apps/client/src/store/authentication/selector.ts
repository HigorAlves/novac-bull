import { RootState } from '../rootReducer'

export function getID(state: RootState): string | null {
	return state.authentication.token
}
