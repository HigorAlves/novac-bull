import React from 'react'

import { IUser } from '@jetpack/interfaces'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { AppState } from 'store'
import { requestRegister } from 'store/authentication/actions'

import { Form } from './styles'

const validationSchema = yup.object({
	name: yup.string().required('Name is required'),
	cpf: yup.string().required('CPF is required'),
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
})

export function RegisterForm() {
	const dispatch = useDispatch()
	const isLoading = useSelector(
		(state: AppState) => state.authentication.loading
	)
	const { t } = useTranslation('authentication', {
		useSuspense: false
	})
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			cpf: ''
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			const data: IUser = {
				...values,
				image: 'tess',
				role: 'client',
				locale: {
					language: 'pt-BR',
					currency: 'BRL'
				}
			}
			dispatch(requestRegister(data))
		}
	})

	return (
		<>
			<Typography
				variant={'h5'}
				align={'center'}
				style={{ fontWeight: 700, marginBottom: 40 }}
			>
				{t('form.registerTitle')}
			</Typography>
			<Form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id='name'
					name='name'
					label={t('form.name')}
					variant={'outlined'}
					color={'secondary'}
					size={'small'}
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
					disabled={isLoading}
				/>
				<TextField
					fullWidth
					id='email'
					name='email'
					label={t('form.email')}
					type={'email'}
					variant={'outlined'}
					color={'secondary'}
					size={'small'}
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					disabled={isLoading}
				/>

				<InputMask
					mask='999.999.999-99'
					value={formik.values.cpf}
					disabled={isLoading}
					onChange={formik.handleChange}
				>
					{() => (
						<TextField
							fullWidth
							id='cpf'
							name='cpf'
							label={t('form.cpf')}
							variant={'outlined'}
							color={'secondary'}
							size={'small'}
							error={formik.touched.cpf && Boolean(formik.errors.cpf)}
							helperText={formik.touched.cpf && formik.errors.cpf}
							disabled={isLoading}
						/>
					)}
				</InputMask>

				<TextField
					fullWidth
					id='password'
					name='password'
					label={t('form.password')}
					type='password'
					variant={'outlined'}
					color={'secondary'}
					size={'small'}
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					disabled={isLoading}
				/>
				<TextField
					fullWidth
					id='passwordConfirmation'
					name='passwordConfirmation'
					label={t('form.confirmPassword')}
					type='password'
					variant={'outlined'}
					color={'secondary'}
					size={'small'}
					value={formik.values.passwordConfirmation}
					onChange={formik.handleChange}
					error={
						formik.touched.passwordConfirmation &&
						Boolean(formik.errors.passwordConfirmation)
					}
					helperText={
						formik.touched.passwordConfirmation &&
						formik.errors.passwordConfirmation
					}
					disabled={isLoading}
				/>
				<Button
					color='primary'
					variant='contained'
					size={'large'}
					type='submit'
					fullWidth
					style={{ marginTop: 30 }}
					disabled={isLoading}
				>
					{t('button.register')}
				</Button>
			</Form>
		</>
	)
}
