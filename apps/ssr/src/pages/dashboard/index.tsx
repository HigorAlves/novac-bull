import React from 'react'

import { FinanceCard } from '~/components'
import asPrivatePage from '~/hooks/AsPrivatePage'

function Dashboard(): JSX.Element {
	return <FinanceCard />
}

export default asPrivatePage(Dashboard)('dashboard')
