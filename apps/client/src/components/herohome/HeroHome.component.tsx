import React from 'react'

// eslint-disable-next-line
import Lottie from 'react-lottie'
import {
	Container,
	TwoColumn,
	LeftColumn,
	RightColumn,
	Heading,
	Paragraph,
	Actions,
	IllustrationContainer
} from './styled.component'
import moneyConnect from '~/assets/lottie/money-connect.json'
import { Button } from '~/components/'

export default function HeroHome() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: moneyConnect,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<>
			<Container>
				<TwoColumn>
					<LeftColumn>
						<Heading>
							O jeito mais fácil e inteligente de organizar{' '}
							<span className='text-primary-500'>
								sua vida{' '}
								<span className='bg-gradient-to-br from-green-400 to-green-800 text-transparent bg-clip-text'>
									financeira
								</span>
							</span>
						</Heading>
						<Paragraph>
							Com o Novac, você da adeus ao caderninho e todas aquelas notinhas
							que você guardava para controlar suas finanças. Tudo automatizado,
							seguro e na palma da sua mão!
						</Paragraph>
						<Actions>
							<input type='text' placeholder='Seu Email' />
							<Button primary>Fazer Pré Cadastro</Button>
						</Actions>
					</LeftColumn>
					<RightColumn>
						<IllustrationContainer>
							<Lottie options={defaultOptions} height={400} width={400} />
						</IllustrationContainer>
					</RightColumn>
				</TwoColumn>
			</Container>
		</>
	)
}
