import { ICategory } from '@jetpack/interfaces'

enum CategoryType {
	INCOME = 'income',
	EXPENSE = 'expense',
	TRANSFER = 'transfer'
}

export const CATEGORIES_TEMPLATE: ICategory[] = [
	{
		id: '1',
		name: 'Ajuda de Custo',
		icon: 'tool',
		type: CategoryType.INCOME,
		backgroundColor: 'green'
	}
]
