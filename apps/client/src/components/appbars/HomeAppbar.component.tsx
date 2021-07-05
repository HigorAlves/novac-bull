import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'

import { Button } from '~/components'

const solutions = [
	{
		name: 'Inicio',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#pre-register'
	},
	{
		name: 'Sobre Nós',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#whynovac'
	}
]

export default function HomeAppbar() {
	return (
		<nav>
			<Popover className='relative bg-white'>
				{({ open }) => (
					<>
						<div className='mx-auto px-4 sm:px-6 max-w-full'>
							<div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
								<div className='flex justify-start lg:w-0 lg:flex-1'>
									<a href='#pre-register'>
										<p>Icone Novac</p>
									</a>
								</div>
								<div className='-mr-2 -my-2 md:hidden'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
										<p>Colocar icone de menu aqui</p>
									</Popover.Button>
								</div>
								<Popover.Group as='nav' className='hidden md:flex space-x-10'>
									<a
										href='#pre-register'
										className='text-base font-medium text-gray-500 hover:text-gray-900'
									>
										Inicio
									</a>
									<a
										href='#whynovac'
										className='text-base font-medium text-gray-500 hover:text-gray-900'
									>
										Recursos
									</a>
								</Popover.Group>
								<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
									<a
										href='#'
										className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mr-4'
									>
										Entrar
									</a>
									<Button primary>Começar Grátis</Button>
								</div>
							</div>
						</div>

						<Transition
							show={open}
							as={Fragment}
							enter='duration-200 ease-out'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='duration-100 ease-in'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Popover.Panel
								focus
								static
								className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
							>
								<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
									<div className='pt-5 pb-6 px-5'>
										<div className='flex items-center justify-between'>
											<div>
												<p>Logo do Novac aqui</p>
											</div>
											<div className='-mr-2'>
												<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
													<p>Icone de fechar aqui</p>
												</Popover.Button>
											</div>
										</div>
										<div className='mt-6'>
											<nav className='grid gap-y-8'>
												{solutions.map(item => (
													<a
														key={item.name}
														href={item.href}
														className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
													>
														<p>Icone aqui</p>
														<span className='ml-3 text-base font-medium text-gray-900'>
															{item.name}
														</span>
													</a>
												))}
											</nav>
										</div>
									</div>
									<div className='py-6 px-5 space-y-6'>
										<div>
											<Button primary>Entrar</Button>
											<p className='mt-6 text-center text-base font-medium text-gray-500'>
												Ainda não é usuário? <Button>Começar Grátis</Button>
											</p>
										</div>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</nav>
	)
}
