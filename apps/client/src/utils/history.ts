import createHistory from 'history/createBrowserHistory'

export function goTo(page: string): void {
	const history = createHistory()
	history.push(page)
}
