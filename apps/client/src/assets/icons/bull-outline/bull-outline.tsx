import React from 'react'

import Lottie from 'react-lottie'

import * as animationData from './bull-outline.json'

export function BullOutline() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return <Lottie options={defaultOptions} height={140} width={140} />
}
