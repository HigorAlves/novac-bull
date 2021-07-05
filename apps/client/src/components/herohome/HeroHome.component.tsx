import React from 'react'

// eslint-disable-next-line
import Image from 'next/image'
import Lottie from 'react-lottie'

import {
	Container,
	TwoColumn,
	LeftColumn,
	RightColumn,
	DownloadColumn,
	Heading,
	Paragraph,
	Actions,
	IllustrationContainer
} from './styled.component'
import moneyConnect from '~/assets/lottie/money-connect.json'
import appleIcon from '~/assets/svgs/apple.svg'
import playStoreIcon from '~/assets/svgs/play-store.svg'
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
			<Container id='pre-register'>
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
				<DownloadColumn>
					<Button download>
						<Image src={playStoreIcon} width={20} height={20} />
						<span className='ml-4 flex items-start flex-col leading-none'>
							<span className='text-xs text-gray-600 mb-1'>Baixe na</span>
							<span className='title-font font-medium'>Google Play</span>
						</span>
					</Button>
					<Button download>
						<Image src={appleIcon} width={20} height={20} />
						<span className='ml-4 flex items-start flex-col leading-none'>
							<span className='text-xs text-gray-600 mb-1'>Baixe na</span>
							<span className='title-font font-medium'>App Store</span>
						</span>
					</Button>
				</DownloadColumn>
			</Container>
		</>
	)
}
