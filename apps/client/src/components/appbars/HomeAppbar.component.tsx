import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'

import { Button } from '~/components'

const solutions = [
	{
		name: 'Analytics',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#'
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#'
	}
]

const recentPosts = [
	{ id: 1, name: 'Boost your conversion rate', href: '#' },
	{
		id: 2,
		name: 'How to use search engine optimization to drive traffic to your site',
		href: '#'
	},
	{ id: 3, name: 'Improve your customer experience', href: '#' }
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function HomeAppbar() {
	return (
		<nav>
			<Popover className='relative bg-white'>
				{({ open }) => (
					<>
						<div className='mx-auto px-4 sm:px-6 max-w-full'>
							<div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
								<div className='flex justify-start lg:w-0 lg:flex-1'>
									<a href='#'>
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
										href='#'
										className='text-base font-medium text-gray-500 hover:text-gray-900'
									>
										Pré-Registro
									</a>
									<a
										href='#'
										className='text-base font-medium text-gray-500 hover:text-gray-900'
									>
										Sobre Nós
									</a>

									<Popover className='relative'>
										{({ open }) => (
											<>
												<Transition
													show={open}
													as={Fragment}
													enter='transition ease-out duration-200'
													enterFrom='opacity-0 translate-y-1'
													enterTo='opacity-100 translate-y-0'
													leave='transition ease-in duration-150'
													leaveFrom='opacity-100 translate-y-0'
													leaveTo='opacity-0 translate-y-1'
												>
													<Popover.Panel
														static
														className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'
													>
														<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
															<div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
																<div>
																	<h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase'>
																		Recent Posts
																	</h3>
																	<ul className='mt-4 space-y-4'>
																		{recentPosts.map(post => (
																			<li
																				key={post.id}
																				className='text-base truncate'
																			>
																				<a
																					href={post.href}
																					className='font-medium text-gray-900 hover:text-gray-700'
																				>
																					{post.name}
																				</a>
																			</li>
																		))}
																	</ul>
																</div>
																<div className='mt-5 text-sm'>
																	<a
																		href='#'
																		className='font-medium text-indigo-600 hover:text-indigo-500'
																	>
																		{' '}
																		View all posts{' '}
																		<span aria-hidden='true'>&rarr;</span>
																	</a>
																</div>
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								</Popover.Group>
								<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
									<a
										href='#'
										className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
									>
										Entrar
									</a>
									<Button primary>Registrar</Button>
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
										<div className='grid grid-cols-2 gap-y-4 gap-x-8'>
											<a
												href='#'
												className='text-base font-medium text-gray-900 hover:text-gray-700'
											>
												Pré-Registro
											</a>

											<a
												href='#'
												className='text-base font-medium text-gray-900 hover:text-gray-700'
											>
												Sobre Nós
											</a>
										</div>
										<div>
											<Button primary>Entrar</Button>
											<p className='mt-6 text-center text-base font-medium text-gray-500'>
												Ainda não é usuário? <Button>Registrar</Button>
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
