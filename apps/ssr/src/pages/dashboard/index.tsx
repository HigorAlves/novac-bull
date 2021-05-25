import React from 'react'

import { FinanceCard } from '~/components'
import asPrivatePage from '~/hooks/AsPrivatePage'

function Dashboard(): JSX.Element {
	return (
		<div className={'container mx-auto'}>
			<p className='text-gray-100 text-3xl text-left font-bold my-4 ml-4'>
				Carteiras
			</p>
			<section className={'grid gap-4 md:grid-cols-4 sm:grid-cols-6 pl-4 pr-4'}>
				<FinanceCard
					name={'Nubank Corrente'}
					value={20000}
					isGrowing={true}
					type={'Conta corrente'}
				/>
				<FinanceCard
					name={'Nubank Corrente'}
					value={20000}
					isGrowing={true}
					type={'Conta corrente'}
				/>
				<FinanceCard
					name={'Nubank Corrente'}
					value={20000}
					isGrowing={true}
					type={'Conta corrente'}
				/>
				<FinanceCard
					name={'Nubank Corrente'}
					value={20000}
					isGrowing={true}
					type={'Conta corrente'}
				/>
			</section>
		</div>
	)
}

export default asPrivatePage(Dashboard)('dashboard')
