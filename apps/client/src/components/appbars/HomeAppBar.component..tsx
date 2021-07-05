import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Button, Link } from '~/components'

const menuItems = [
	{
		name: 'Inicio',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#pre-register'
	},
	{
		name: 'Recursos',
		description: "Your customers' data will be safe and secure.",
		href: '#whynovac'
	}
]

export function HomeAppBar() {
	return (
		<nav>
			<Popover className='relative bg-white'>
				{({ open }) => (
					<>
						<div className='max-w-full mx-auto px-4 sm:px-6'>
							<div className='flex justify-between items-center border-b-2 border-gray-100 py-4 sm:py-2 md:justify-start md:space-x-10'>
								<div className='flex justify-start lg:w-0 lg:flex-1'>
									<a href='#pre-register'>
										<p>Icone Novac</p>
									</a>
								</div>
								<div className='-mr-2 -my-2 md:hidden'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
										<span className='sr-only'>Abrir Menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>

								<nav className={'hidden md:flex space-x-10'}>
									{menuItems.map(item => (
										<Link
											key={item.name}
											link={item.href}
											text={item.name}
											medium
										/>
									))}
								</nav>

								<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
									<Button>Entrar</Button>
									<Button primary>Começar grátis</Button>
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
												<p>Icone Novac</p>
											</div>
											<div className='-mr-2'>
												<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
													<span className='sr-only'>Fechar Menu</span>
													<XIcon className='h-6 w-6' aria-hidden='true' />
												</Popover.Button>
											</div>
										</div>
										<div className='mt-6'>
											<nav className='grid gap-y-8'>
												{menuItems.map(item => (
													<Link
														key={item.name}
														link={item.href}
														text={item.name}
														medium
													/>
												))}
											</nav>
										</div>
									</div>
									<div className='py-6 px-5 space-y-6'>
										<div>
											<Button primary>Começar grátis</Button>
											<p className='mt-6 text-center text-base font-medium text-gray-500'>
												Já possui uma conta?{' '}
												<Link link={'/'} text={'Entrar'} colorfull />
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
