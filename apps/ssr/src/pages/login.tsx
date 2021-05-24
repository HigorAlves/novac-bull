import React from 'react'

import { Button, Input } from '~/components'

export default function Login() {
	return (
		<section className='flex items-center h-screen text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
				<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
					<h1 className='title-font font-medium text-3xl text-white'>
						GERENCIE TODOS SEUS INVESTIMENTOS EM UM LUGAR SÓ!
					</h1>
					<p className='leading-relaxed mt-4'>
						Poke slow-carb mixtape knausgaard, typewriter street art gentrify
						hammock starladder roathse. Craies vegan tousled etsy austin.
					</p>
				</div>
				<div className='lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
					<h2 className='text-white text-lg font-medium title-font mb-5'>
						Acesse sua conta
					</h2>
					<div className='relative mb-4'>
						<label htmlFor='email' className='leading-7 text-sm text-gray-400'>
							Email
						</label>
						<Input type={'email'} id={'email'} name={'email'} />
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='password'
							className='leading-7 text-sm text-gray-400'
						>
							Senha
						</label>
						<Input type={'password'} id={'password'} name={'password'} />
					</div>
					<Button text={'ENTRAR'} />
				</div>
			</div>
		</section>
	)
}
