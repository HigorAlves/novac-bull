import React from 'react'

import { CompleteStep } from '~/components/Steps/CompleteStep'
import { CurrentStep } from '~/components/Steps/CurrentStep'
import { UpcomingStep } from '~/components/Steps/UpcomingStep'

interface ISteps {
	name: string
	status: 'complete' | 'current' | 'upcoming'
}

interface IProps {
	steps: ISteps[]
}

export function Steps({ steps }: IProps): JSX.Element {
	return (
		<section>
			<ol role='list' className='flex items-center'>
				{steps.map((step, stepIdx) => (
					<li
						key={step.name}
						className={
							stepIdx !== steps.length - 1
								? 'pr-8 sm:pr-20 relative'
								: 'relative'
						}
					>
						{step.status === 'complete' ? (
							<CompleteStep name={step.name} />
						) : step.status === 'current' ? (
							<CurrentStep name={step.name} />
						) : (
							<UpcomingStep name={step.name} />
						)}
					</li>
				))}
			</ol>
		</section>
	)
}
