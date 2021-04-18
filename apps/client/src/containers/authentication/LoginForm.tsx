import React from 'react'

import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'

import { AppState } from 'store'
import { requestLogin } from 'store/authentication/actions'

import { Form } from './styles'

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required')
})

export function LoginForm() {
	const dispatch = useDispatch()
	const history = useHistory()
	const isLoading = useSelector(
		(state: AppState) => state.authentication.loading
	)
	const { t } = useTranslation('authentication', {
		useSuspense: false
	})
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			dispatch(requestLogin(values, history))
		}
	})

	return (
		<>
			<Typography
				variant={'h5'}
				align={'center'}
				style={{ fontWeight: 700, marginBottom: 40 }}
			>
				{t('form.loginTitle')}
			</Typography>
			<Form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id='email'
					name='email'
					label={t('form.email')}
					variant={'outlined'}
					color={'secondary'}
					size={'small'}
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					disabled={isLoading}
				/>
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
				<Button
					color='secondary'
					variant='contained'
					fullWidth
					type='submit'
					size={'large'}
					style={{ marginTop: 30 }}
					disabled={isLoading}
				>
					{t('button.login')}
				</Button>
			</Form>
		</>
	)
}
