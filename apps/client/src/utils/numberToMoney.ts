export function numberToMoney(
	n: number,
	lang: string,
	currency: string
): string {
	return new Intl.NumberFormat(lang, {
		style: 'currency',
		currency
	}).format(n)
}
