import React, { useState } from 'react'

import { Grid } from '@material-ui/core'

import RocketIcon from 'assets/images/icons/rocket.png'
import { LoginForm, RegisterForm, SelectorSwitch } from 'containers'

import { Main, FormIcon, FormWrapper } from './style.home'

export function HomePage(): JSX.Element {
	const [tab, setTab] = useState(0)

	return (
		<Main container spacing={3} justify={'space-around'} alignItems={'center'}>
			<Grid item sm={11} md={4} style={{ marginBottom: 80 }}>
				<SelectorSwitch value={tab} setValue={setTab} />
			</Grid>
			<Grid item sm={12} md={4}>
				<FormWrapper>
					<FormIcon src={RocketIcon} alt={'foguete'} />
					{tab === 0 ? <LoginForm /> : <RegisterForm />}
				</FormWrapper>
			</Grid>
		</Main>
	)
}
