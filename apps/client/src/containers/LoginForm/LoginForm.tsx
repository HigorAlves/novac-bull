import React from 'react'

import { Button, Input, RedirectLink } from '~/components'
import { Paper } from '~/components/Paper/Paper'

export function LoginForm() {
	return (
		<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
			<Paper>
				<form className='space-y-6' action='#' method='POST'>
					<Input
						type={'email'}
						id={'email'}
						htmlFor={'email'}
						label={'Email'}
						name={'email'}
					/>

					<Input
						type={'password'}
						id={'password'}
						htmlFor={'password'}
						label={'Password'}
						name={'password'}
					/>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember-me'
								name='remember-me'
								type='checkbox'
								className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
							/>
							<label
								htmlFor='remember-me'
								className='ml-2 block text-sm text-gray-900'
							>
								Remember me
							</label>
						</div>

						<RedirectLink url={'/esqueci-senha'}>
							Esqueceu sua senha?
						</RedirectLink>
					</div>

					<div>
						<Button type={'submit'} size={'lg'} full>
							Entrar
						</Button>
					</div>
				</form>
			</Paper>
		</div>
	)
}
