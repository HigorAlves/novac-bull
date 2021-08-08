import React from 'react'

import { RedirectLink } from '~/components'
import { LoginForm } from '~/containers'

export default function Example() {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<img
					className='mx-auto h-12 w-auto'
					src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
					alt='Workflow'
				/>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
					Acesse a plataforma
				</h2>
				<p className='mt-2 text-center text-sm text-gray-600'>
					<RedirectLink url={'/changelog'}>Open Alpha 0.1.0</RedirectLink>
				</p>
			</div>

			<LoginForm />
		</div>
	)
}
