import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, RedirectLink } from '~/components'
import { Paper } from '~/components/Paper/Paper'

export function LoginForm() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: values => console.log(values),
		validationSchema: Yup.object({
			email: Yup.string()
				.email('É preciso inserir um email valido.')
				.required('Este campo é obrigatorio'),
			password: Yup.string().required('Este campo é obrigatorio')
		})
	})

	return (
		<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
			<Paper>
				<form className='space-y-6' onSubmit={formik.handleSubmit}>
					<Input
						type={'email'}
						id={'email'}
						htmlFor={'email'}
						label={'Email'}
						name={'email'}
						onChange={formik.handleChange}
						value={formik.values.email}
						hasError={formik.errors.email}
					/>

					<Input
						type={'password'}
						id={'password'}
						htmlFor={'password'}
						label={'Password'}
						name={'password'}
						onChange={formik.handleChange}
						value={formik.values.password}
						hasError={formik.errors.password}
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
								Lembrar-me
							</label>
						</div>

						<RedirectLink url={'/esqueci-senha'}>
							Esqueceu sua senha?
						</RedirectLink>
					</div>

					<Button type={'submit'} size={'lg'} full>
						Entrar
					</Button>
				</form>
			</Paper>
		</div>
	)
}
