import React from 'react'

import { BullOutline } from '~/assets/icons/bull-outline/bull-outline'
import { RedirectLink, Typography } from '~/components'
import { LoginForm } from '~/containers'

export default function Example() {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<BullOutline />

				<Typography as={'h3'} center>
					Entrar na plataforma
				</Typography>

				<p className='mt-2 text-center text-sm text-gray-600'>
					<RedirectLink url={'/changelog'}>Open Alpha 0.1.0</RedirectLink>
				</p>
			</div>

			<LoginForm />
		</div>
	)
}
