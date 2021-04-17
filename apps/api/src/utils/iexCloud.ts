import { IQuote, ILogo, ICompnay } from '@jetpack/interfaces'
import axios from 'axios'

const TOKEN = 'pk_19da9c018bec48ec8c97c063e4bfc7fd'
const QUOTE_URL = `/quote?token=${TOKEN}`
const COMPANY_URL = `/company?token=${TOKEN}`

const api = axios.create({
	baseURL: `https://cloud.iexapis.com/stable/stock`
})

export async function getStock(stock: string): Promise<IQuote> {
	const { data } = await api.get(stock + QUOTE_URL)
	return data
}

export async function getLogo(stock: string): Promise<ILogo> {
	const { data } = await api.get(`/stock/${stock}?token=${TOKEN}`)
	return data
}

export async function getCompany(stock: string): Promise<ICompnay> {
	const { data } = await api.get(stock + COMPANY_URL)
	return data
}
