import React from 'react'

import Lottie from 'react-lottie'

import animationData from '~/assets/lottie/bull-logo.json'

const defaultOptions = {
	loop: false,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
}

export function AppBar(): JSX.Element {
	return (
		<header className='text-gray-400 bg-gray-900 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
					<Lottie
						options={defaultOptions}
						height={40}
						width={40}
						isStopped={false}
						isClickToPauseDisabled={true}
					/>
					<span className='ml-3 text-xl'>Novac Bull</span>
				</a>
				<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
					<a className='mr-5 hover:text-white'>Painel de controle</a>
					<a className='mr-5 hover:text-white'>Orcamentos</a>
				</nav>
				<button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
					Configurações
					<svg
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-4 h-4 ml-1'
						viewBox='0 0 24 24'
					>
						<path d='M5 12h14M12 5l7 7-7 7' />
					</svg>
				</button>
			</div>
		</header>
	)
}
