import React from 'react'

import Lottie from 'react-lottie'

import {
	MainSection,
	Heading,
	Paragraph,
	BenefitiesMainDiv,
	BenefitiesCard,
	BenefitiesCardIcon,
	BenefitiesCardText,
	BenefitiesCardTitle,
	BenefitiesCardSubtitle
} from './styled.component'
import lockerIcon from '~/assets/lottie/locker.json'
import porquinIcon from '~/assets/lottie/porquin.json'
import { Button } from '~/components'

export default function WhyNovac() {
	const porquinAnimationOptions = {
		loop: true,
		autoplay: true,
		animationData: porquinIcon
	}

	const lockerAnimationOptions = {
		loop: true,
		autoplay: true,
		animationData: lockerIcon
	}

	return (
		<MainSection id='whynovac'>
			<div className='text-center mb-20'>
				<Heading>Por quê usar o Novac?</Heading>
				<Paragraph>Lorem ipsum</Paragraph>
				<div className='flex mt-6 justify-center'>
					<div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
				</div>
			</div>
			<BenefitiesMainDiv>
				<BenefitiesCard>
					<BenefitiesCardIcon>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-10 h-10'
							viewBox='0 0 24 24'
						>
							<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
						</svg>
					</BenefitiesCardIcon>
					<BenefitiesCardText>
						<BenefitiesCardTitle>
							Acompanhe seus investimentos
						</BenefitiesCardTitle>
						<BenefitiesCardSubtitle>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</BenefitiesCardSubtitle>
					</BenefitiesCardText>
				</BenefitiesCard>

				<BenefitiesCard>
					<BenefitiesCardIcon>
						<Lottie options={porquinAnimationOptions} height={60} width={60} />
					</BenefitiesCardIcon>
					<BenefitiesCardText>
						<BenefitiesCardTitle>Planeje suas finanças</BenefitiesCardTitle>
						<BenefitiesCardSubtitle>
							Esqueça o caderninho e todas aquelas notinhas que você guardava
							para planejar suas finanças. Planeje suas finanças pelo Novac de
							forma rápida e segura!
						</BenefitiesCardSubtitle>
					</BenefitiesCardText>
				</BenefitiesCard>

				<BenefitiesCard>
					<BenefitiesCardIcon>
						<Lottie options={lockerAnimationOptions} height={70} width={70} />
					</BenefitiesCardIcon>
					<BenefitiesCardText>
						<BenefitiesCardTitle>Segurança</BenefitiesCardTitle>
						<BenefitiesCardSubtitle>
							PS: Higão, tenta criar algum texto com base no backend que a gente
							fez, você entende mais da segurança do backend do que eu
						</BenefitiesCardSubtitle>
					</BenefitiesCardText>
				</BenefitiesCard>
			</BenefitiesMainDiv>

			<div className='flex mt-16 justify-center'>
				<Button primary>BUTÃO</Button>
			</div>
		</MainSection>
	)
}
