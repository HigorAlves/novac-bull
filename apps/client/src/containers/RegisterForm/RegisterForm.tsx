import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, RedirectLink } from '~/components'
import { Paper } from '~/components/Paper/Paper'

export function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			name: ''
		},
		onSubmit: values => console.log(values),
		validationSchema: Yup.object({
			email: Yup.string()
				.email('É preciso inserir um email valido.')
				.required('Este campo é obrigatorio'),
			password: Yup.string().required('Este campo é obrigatorio'),
			name: Yup.string().required('Este campo é obrigatorio')
		})
	})

	return (
		<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
			<Paper>
				<form className='space-y-6' onSubmit={formik.handleSubmit}>
					<Input
						type={'text'}
						id={'name'}
						htmlFor={'name'}
						label={'Nome completo'}
						name={'name'}
						onChange={formik.handleChange}
						value={formik.values.name}
						hasError={formik.errors.name}
					/>

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
						label={'Senha'}
						name={'password'}
						onChange={formik.handleChange}
						value={formik.values.password}
						hasError={formik.errors.password}
					/>

					<div className='flex items-center justify-end'>
						<RedirectLink url={'/login'}>
							Já faz parte da comunidade?
						</RedirectLink>
					</div>

					<Button type={'submit'} size={'lg'} full>
						Começar controle financeiro
					</Button>
				</form>
			</Paper>
		</div>
	)
}
